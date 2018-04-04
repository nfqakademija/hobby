![](https://avatars0.githubusercontent.com/u/4995607?v=3&s=100)

NFQ Akademija
============

# Intro

Sveiki! Tai yra Jūsų startinis projekto "template". 
Šioje repositorijoje rasite Symfony `4.0.6` minimalų projekto paketą su jau paruoštais 
visais reikalingais failais ir įrankiais darbui:
 
- Lokalaus development'o aplinka (docker) (PHP 7.2, MySql DB, Nginx)
- Pradinis bundle (AppBundle) kartu su stiliaus failais.
- Įdiegtas bootstrap
- Asset'ų buildinimas (npm, yarn, sass)
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
* docker: `1.13.1`
* docker-compose: `1.7.1`


### Projekto paleidimas (projekto kūrimui lokaliai)

* Pasiruoškite infrastruktūrą:
  * Pasikeičiame slaptažodžius:
    `.docker` kataloge žr. failų su `APP_SECRET` ir `DATABASE_URL` reikšmėmis
  * Pasileidžiame:
  ```
  sudo su -c 'echo "127.0.0.1 symfony.local" >> /etc/hosts'
  docker build .docker/php -t php.symfony 
  docker build .docker/frontend/ -t frontend.symfony
  docker-compose -f .docker/docker-compose.yml up -d
  ```

* JavaScript/CSS įrankiams (atsidaryti atskirame lange)
```
docker-compose run frontend.symfony
```
  * Pirmą kartą (įsirašome JavaScript bilbiotekas)
  ```
  npm install
  ```
  * Jei pakeitimai neatsinaujina:
  ```
  yarn run encore dev --watch
  ```

* PHP įrankiams (atsidaryti atskirame lange)
```
docker exec -it php.symfony bash
```
  * Pirmą kartą paleidus (įsirašome PHP biliotekas):
  ```
  composer install
  ```
  * Jei pakeitimai neatsinaujina:
  ```
  ./bin/console --env=dev cache:clear
  ./bin/console --env=dev cache:warmup
  ./bin/console --env=dev assets:install
  ```

* Pasižiūrime rezultatą.
Atsidarome naršyklėje [symfony.local](http://symfony.local)


### Projekto paleidimas (palyginimui kaip atrodytų produkcinėje)

* Pasiruoškite infrastruktūrą:
  * Pasikeičiame slaptažodžius:
    `.docker` kataloge žr. failų su `APP_SECRET` ir `DATABASE_URL` reikšmėmis
  * Pasileidžiame:
  ```
  sudo su -c 'echo "127.0.0.1 symfony.prod" >> /etc/hosts'
  docker build .docker/php -t php.symfony 
  docker build .docker/frontend/ -t frontend.symfony
  docker-compose -f .docker/docker-compose.yml up -d
  ```

* JavaScript/CSS įrankiams (atsidaryti atskirame lange)
```
docker-compose run frontend.symfony
```
  * Pirmą kartą (įsirašome JavaScript bilbiotekas)
  ```
  npm install
  ```
  * Jei pakeitimai neatsinaujina:
  ```
  yarn run encore encore production
  ```

* PHP įrankiams (atsidaryti atskirame lange)
```
docker exec -it php.symfony bash
```
  * Pirmą kartą paleidus (įsirašome PHP biliotekas):
  ```
  composer install
  ```
  * Jei pakeitimai neatsinaujina:
  ```
  ./bin/console --env=prod cache:clear
  ./bin/console --env=prod cache:warmup
  ./bin/console --env=prod assets:install
  ```

* Pasižiūrime rezultatą.
Atsidarome naršyklėje [symfony.prod](http://symfony.prod)

P.S. šalia galima atsidaryti ir palyginti su `symfony.local`


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
