attributumok = []
tipus = []
adatok = []
adatokKiiratasra = ""

with open("./adatok_feldolgozasa/jarmu.txt", 'r', encoding='utf-8') as file:
    hanyadszorfut = 1
    for sor in file:
        adat = sor.strip('\n').split(';')
        if (hanyadszorfut == 1):
            attributumok = adat
        elif (hanyadszorfut == 2):
            tipus = adat
        else:
            adatok.append(adat)
        hanyadszorfut += 1

adatokKiiratasra += "[\n"
for x in range(len(adatok)):
    adatokKiiratasra += "\t{\n"
    for y in range(len(attributumok)):
        if (y < (len(attributumok)) - 1):
            if (tipus[y] == "i"):
                adatokKiiratasra += f'\t\t"{attributumok[y]}": {adatok[x][y]},\n'
            elif (tipus[y] == "s"):
                adatokKiiratasra += f'\t\t"{attributumok[y]}": "{adatok[x][y]}",\n'
        else:
            if (tipus[y] == "i"):
                adatokKiiratasra += f'\t\t"{attributumok[y]}": {adatok[x][y]}\n'
            elif (tipus[y] == "s"):
                adatokKiiratasra += f'\t\t"{attributumok[y]}": "{adatok[x][y]}"\n'  
    if (x < (len(adatok)) - 1):
        adatokKiiratasra += "\t},\n"
    else:
        adatokKiiratasra += "\t}\n"
adatokKiiratasra += "]\n"


file = open('./vista/database/seeders/adatok/jarmu.json', 'w', encoding='utf-8')
file.write(adatokKiiratasra)
file.close()
