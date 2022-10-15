import urllib.request
import re
import pandas as pd
class court:
    def __init__(self, name, district, address):
        self.name = name
        self.district = district
        self.address = address

    name = ""
    district = ""
    address = ""

    def toString(self):
        print(self.name)
        print(self.district)
        print(self.address)


def removeMetaTags(html):
    html = html.replace("\t", "")
    html = html.replace("\n", "")
    return html


def getSubstring(start, end, text):

    # getting index of substrings
    idx1 = text.index(start)
    idx2 = text.index(end)

    res = ''
    # getting elements in between
    for idx in range(idx1 + len(start) + 1, idx2):
        res = res + text[idx]
    return res

def getCourts(filename):
    with open(filename, encoding="utf-16") as f:
        lines = f.readlines()
    newLines = ""
    for line in lines:
        newLines += line
    informations = removeMetaTags(newLines)
    dirtyCourts = informations.split('</a>')
    courts = []
    for i in dirtyCourts[:-1]:
        #print(i)
        name = getSubstring("<h3>", "</h3>", i).replace("</small>", "").replace("small>", "")
        district = getSubstring("<li><span>Wydział</span>", "</li>", i)
        address = getSubstring("<li><span>Adres</span>", "</ul>", i).replace("</li>", "")
        courts.append(court(name, district, address))

    return courts


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    allCourts = []
    dataSets = ["courtData/page1.txt", "courtData/page2.txt", "courtData/page3.txt"]
    for set in dataSets:
        allCourts += getCourts(set)

    for court in allCourts:
        court.toString()

    df = pd.DataFrame(allCourts)
    print(df)
    df.to_json("courtsInfo.json")