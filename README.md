![](https://avatars0.githubusercontent.com/u/4995607?v=3&s=100)

NFQ Akademija
============

# Intro

Sveiki! Tai yra Jūsų startinis projekto "template". 
Šioje repositorijoje rasite Symfony 3.1 startinį prjekto paketa su jau paruoštais 
visais reikalingais failais ir įrankiais darbui:
 
- Lokalaus development'o aplinka (docker) (PHP 7, Maria DB, Nginx)
- Pradini bundle (AppBundle), kartu su stiliaus failu ir kitais.
- Idiegta bootstrap
- Asset'u buildinima (npm. gulp, sass)
- Travis CI template


# Paleidimo instrukcija

Metai iš metų buvo maldaujama jog studentai galėtų dirbti su Windowsais. 
Tad skubu pranešti gerą žinią, Dievai išklausė Jūsų maldas ir nuo šiol galėsite teoriškai naudoti Windowsus!

> Perspejimas: Itin kieti profesionalai nenaudoja niekam tikusių operacinių sistemų. 

### Reikės dokerio

Nauosime naujausia dokerio versija, kuri įgalina virtualizaciją be Virtualbox ar Vmware. 
Tam reikės kad jūsų kompiuterio procesorius palaikytu Hyper-V.

Parsisiunčiame įranki iš [čia](https://www.docker.com/products/overview#/install_the_platform) pagal savo platformą.
Įsidiegiam.

Toliau jums reikės git'o. Jei neturite normalaus terminalo, kuriame jau "by default" `git`komandą jau būtų, atsisiunčiame iš [čia](https://git-scm.com/downloads) .
Įsidiegiame.


### Projekto paleidimas

Downloadinat šią repositoriją. Taip taip, viršuje kairėje rasite žalią mygtuką ant kurio parašyta "download". 
Extractinat turinį į savo megstamą projektų direktoriją.

Einate į šią direktoriją su terminalu. Paprastai bus komanda `cd <path>`.

Toliau leidžiame šias komandas:

```bash

docker-compose build
docker-compose up -d
docker-compose run fpm composer install --prefer-dist
docker-compose run npm npm install
docker-compose run npm npm gulp

```

### Kaip pamatyti kas atsitiko?

Atsidarote naršyklę ir einate į http://127.0.0.1:8000 , 
jei nematote užrašo NFQ Akademija, reiškia kažkur susimovėte, 
tokiu atveju viską ištrinat ir kartojate iš naujo kol gausis. 


### Feedbackas

Jeigu taip nutiktų kad repositorijoje, projekto template ar instrukcijoje rastumėte klaidą, tai nesišnibždėkite vieni tarp kitų, o sukurkite "issue". 
O jei atidarysite "pull requestą" su fixu, gausite iškart 1000 karmos taškų.