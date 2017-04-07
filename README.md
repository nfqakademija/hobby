![](https://avatars0.githubusercontent.com/u/4995607?v=3&s=100)

NFQ Akademija
============

# Intro

Sveiki! Tai yra Jūsų startinis projekto "template". 
Šioje repositorijoje rasite Symfony `~3.2` startinį projekto paketą su jau paruoštais 
visais reikalingais failais ir įrankiais darbui:
 
- Lokalaus development'o aplinka (docker) (PHP 7.0, Maria DB, Nginx)
- Pradinis bundle (AppBundle) kartu su stiliaus failais.
- Įdiegtas bootstrap
- Asset'ų buildinimas (npm, gulp, sass)
- Travis CI template


# Paleidimo instrukcija

Metai iš metų studentai maldavo jog galėtų dirbti su Windows'ais akademijos metu.
 Bet nepaisant nieko, tolerancijos ir palaikymo Windows operacinei niekada nebuvo ir nebus.  

> Perspėjimas: Itin kieti profesionalai nenaudoja niekam tikusių operacinių sistemų. 

### Reikės dokerio

Naudosime naujausią dokerio versiją, kuri įgalina virtualizaciją be Virtualbox ar Vmware.
 Tam reikės, kad jūsų kompiuterio procesorius palaikytų [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor).
 Nėra dėl ko nerimauti, dabartiniai kompiuteriai kone visi turi šį palaikymą.

Parsisiunčiate ir įsidiegiate įrankį iš [čia](https://docs.docker.com/engine/installation/linux/ubuntu/). Iškart įdiegus reikia pasidaryti, kad `docker` būtų galima naudoti be root teisių, kaip tai padaryti rasite [čia](https://docs.docker.com/engine/installation/linux/linux-postinstall/).

Parsisiunčiate ir įsidiegiate `docker-compose` iš [čia](https://github.com/docker/compose/releases).

Taip pat reikia įsidiegti [Kitematic](https://github.com/docker/kitematic/releases).
 Šis įrankis padės geriau organizuoti dokerio konteinerius. 

#### Versijų reikalavimai
* docker: `>=17.x-ce`
* docker-compose: `>=1.8.1`


### Projekto paleidimas

Parsisiunčiate šią repositoriją. Taip taip, viršuje kairėje rasite žalią mygtuką ant kurio parašyta "Download", tada pasirenkate zip failo parsisiuntimą.
 
> Akademijos projektui nereikia forkinti, klonuoti ar dar išrasti kokių nors kitų veiksmų, tik parsisiųsti.
 
Extractinat turinį į savo mėgstamą projektų direktoriją.

Einate į šią direktoriją su terminalu. Paprastai bus komanda `cd <path>`.

**SVARBU:**

Susikuriate projekto viduje `.env` failą. Failą užpildote turiniu pateiktu iš `env.dist`.

Atkreipkite dėmęsį į `LOCAL_USER_ID` ir `LOCAL_GROUP_ID`, įvykdžius nurodytas komandas, ar sutampa `id`su jūsų nurodytais.

Toliau leidžiame komandas esančias žemiau:

```bash

docker-compose up -d
docker-compose exec fpm composer install --prefer-dist -n
docker-compose run npm npm install
docker-compose run npm gulp

```

### Kaip teisingai išjungti docker konteinerius?

Išjungiama su komanda:
```
docker-compose kill
```

Galima išjungti ir po vieną:
```
docker-compose kill <container name>
```


### Kaip pamatyti kas atsitiko?

Atsidarote naršyklę ir einate į `http://127.0.0.1:8000`,
 jei nematote užrašo "NFQ Akademija", reiškia, kažkur susimovėte,
 tokiu atveju viską ištrinat ir kartojate iš naujo tol kol gausis.
 Kai prarasite visiškai viltį, kreipkitės į [Google](http://lmgtfy.com/?q=docker+is+not+working), o po to į mentorių.  

### Troubleshooting'as

Jeigu kažkas nutiko ne taip, na, atsirado raudona eilutė, ar tiesiog nutrūko ir nieko nerodo, neatsidaro naršyklėje svetainė, tai pirmas žingsnis būtų paleisti komandą:

```
docker-compose logs
```

Nepamirškite, kad galima nurodyti norimą procesą. Taip pat ir 'grepinti'.

```
docker-compose logs mariadb
```

### Feedbackas

Jeigu taip nutiktų, kad repositorijoje, projekto template ar instrukcijoje rastumėte klaidą, tai nesišnibždėkite vieni tarp kitų, o sukurkite "issue". 
O jei atidarysite "pull requestą" su fixu, gausite iškart 1000 karmos taškų.
