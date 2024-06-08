#!/usr/bin/env python
from bs4 import BeautifulSoup
import requests
import re
import csv

user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
#link = "https://spca.org.sg/services/rehoming/?animaltype=8&animalgender"
spca_link = "https://spca.org.sg/services/adoption/?animal_keyword=&animaltype=8&animalage=&animalgender="

links = set()
dog_links = set()
#dog_links.add("https://spca.org.sg/animal/argo/")
#dog_links.add("https://spca.org.sg/animal/anakin/")
dogs = []
dogs.append(
    "Name,Gender,DOB,HBDApproved,Child,Cat,DogOther,Active,Calm,FoodMo,Intelligent,Outgoing,Holdingshel,Address,ImageLink,Description".split(","))

def scrape_page(link, add_next_pages=False):
    response = requests.get(link)
    soup = BeautifulSoup(response.content, 'html.parser')
    if add_next_pages:
        page_links = soup.find_all("a", class_="page-link")
        for page_link in page_links:
            if page_link.string != "1":
                links.add(page_link['href'])
    fields = soup.find_all("div", class_="search-result-item-inner")
    for field in fields:
        dog_links.add(field.a['href'])
#        break

def scrape_dog_details(link):
    response = requests.get(link)
    soup = BeautifulSoup(response.content, 'html.parser')
    found_image = "Error: Image not found"
    stats = ""
    for item in soup.find_all("div", class_="csm-productImageItem")[1:]:
        found_image = item.figure.noscript.img['src']
        break
    fields = soup.find_all("div", class_="csm-product-details-box")
    for field in fields:
        for x in field.findChildren("div", class_="pageTitle"):
            name = x.h1.span.text
            x.decompose()
        stats = field.p.text
        field.p.decompose()
        desc = field.text
    gender = "not found"
    match = re.search(r"(Gender|Sex): (\w+)", stats, re.IGNORECASE)
    if match:
        x = match.group(2).lower()
        if x == "male":
            gender = "M"
        elif x == "female":
            gender = "F"
        else:
            gender = x
            print("unknown gender: ",x)
    else:
        print("unknown gender: ")
    age = "missing age"
    match = re.search(r"Age: (.*)", stats, re.IGNORECASE|re.DOTALL)
    if match:
        age = match.group(1)
    else:
        print("unknown age")
    hdbapproved = ""
    if re.search(r"Not HDB Approved", desc, re.IGNORECASE):
        hdbapproved = "N"
    elif re.search(r"HDB Approved", desc, re.IGNORECASE):
        hdbapproved = "Y"
    else:
        print("unable to find hdb approved status")
    #print(name)
    #print(found_image)
    #print(gender)
    #print(hdbapproved)
    #print(age)
    dogs.append([name,gender,age,hdbapproved,"","","","","","","","","SPCA",link,found_image,desc.strip()])
    #print(stats)
    #print(desc)



scrape_page(spca_link, add_next_pages=True)
for link in list(links):
    #break
    scrape_page(link)
    
for dog_link in dog_links:
    print(dog_link)
    scrape_dog_details(dog_link)
    #break

with open('dogs.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(dogs)

"""
with open("spca_dogs.tsv","w") as f:
    f.write("\t".join("Name,Breed,Link".split(',')))
    f.write("\n")
    for dog in sorted(dogs, key=lambda x: "|".join([x[1], x[0]])):
        f.write("\t".join(dog))
        f.write("\n")
"""