# CodersCamp 2020 - Projekt JavaScript
**CodersCamp (coderscamp.edu.pl) - Największy otwarty kurs programowania webowego** 

Wykorzystanie asynchronicznego JavaScript oraz korzystanie z REST API.

## Zasady wykonywania projektu (wspólne dla wszystkich grup i mentorów): 

### W projekcie każdy z uczestników powinien zaprezentować praktyczną znajomość poniższych zagadnień związanych z JavaScript:
- zmienne
- operatory porównania
- pętle
- obiekty, atrybuty
- warunki
- funkcje
- operatory logiczne
- tablice
- iteracja i/lub rekurencja
- console
- return
- "===" vs "=="
- integracja z zewnętrznym REST API
- interakcja z domem
- odwoływanie się do elementów DOM z JavaScript
- zmiana stylów z poziomu JSa
- zmiana zawartości HTML z poziomu JSa
- animacje
- zewnętrzne biblioteki
- async await i/lub Promise
- funkcje callback
- metody HTTP
- pisanie testów jednostkowych 

Do implementacji nie używajcie React (tego nauczycie się w dalszej części kursu), czy takich frameworków jak Angular.
Najlepiej odstawcie też na bok biblioteki stylów takie jak Bootstrap — na upraszczanie życia przyjdzie jeszcze czas.
Ważne, żeby opanować, to co, jest pod spodem gotowych już bibliotek i budować na solidnym fundamencie.
Skupcie się na wykorzystaniu w praktyce tego, co nauczyliście się dzięki materiałom w przerabianym dziale.
 

### W trakcie trwania projektu należy wyznaczyć w zespole odpowiednie funkcje
Aby zespół pracował efektywnie, ważne jest, żeby było wiadomo, kto odpowiada, za jaką kwestię.
Powstało wiele różnych metodyk wspomagające działanie zespołu, które stosuje się także przy pracy programisty.

W trakcie trwania kursu CodersCamp spróbujemy przemycić Wam o nich jak najwięcej w praktyce.
Niestety forma kursu znacznie ogranicza możliwości — zazwyczaj programiści na swoją pracę i jej organizację poświęcają cały etat. 
Tutaj nie mamy tyle czasu na pełne zastosowanie np. Scruma, czy też innych technik.
Mamy jednak nadzieję, że po kursie nie będą one dla Was już wielką niewiadomą.
Mentorzy z pewnością postarają się zorganizować Wam pracę tak, aby w jak największym stopniu odzwierciedlała realia ich codzienności.

Pierwszym krokiem do lepszej organizacji Waszego zespołu będzie wyznaczenie w nim kilku funkcji, które są typowe dla projektów IT.
Z pewnością spotkanie się z nimi w praktyce zawodowej.
Najlepiej, gdyby uczestnicy po prostu się zgłosili. 
W przypadku braku chętnych mentor wyznacza „ochotników".
Oczywiście każda z ról wykonuje prace programistyczne (w przypadku CodersCamp, w rzeczywistości jest to różnie), dodatkowo zajmując się wspomnianymi dla danej roli obowiązkami.
Role należy zmieniać następnie co projekt, aby każdy miał szansę się sprawdzić w którejś z nich.
Szczególnie w pierwszym projekcie poproście mentora o pomoc w spełnianiu swoich ról i podzieleniu się zadaniami.
Wasz mentor może oczywiście pokierować pracą trochę inaczej i zaproponować inny podział lub dodać też jakąś funkcję w zespole.
Warto zorganizować spotkanie rozpoczynające prace, na którym wykonacie i/lub omówicie podstawowy setup projektu.

###### Klient
Zawsze jest to **Mentor**. Uważajcie! 
Ten klient ma też zdolności techniczne i lepiej z nim nie dyskutować, jeśli coś „zaproponuje”.
Dodatkowe testy czy zmiana sposobu implementacji to uwagi jak najbardziej na miejscu. 
Pamiętajcie też, że jedyną stałą w projektach informatycznych jest zmiana.
Wszelkie zmiany w projekcie, jakie zaproponuje Klient, powinny jak najbardziej zostać wzięte pod uwagę :) 
W sytuacjach krytycznych można też poprosić go o posłużenie radą. Będzie też przeglądał każdy wasz wykonany kod.

###### Tech Lead
Ma ostateczne zdanie w kwestiach związanych z technologią, ale dobrze, jeśli radzi się zespołu.
Np. jak dzielimy moduły projektu, w jaki sposób testujemy, której biblioteki użyć.
Powinien też respektować zdanie klienta.
Jeśli Tech Lead będzie przeprowadzał Code Review zadań, jest to jak najbardziej na plus. 
Chociaż zachęcamy do tego wszystkich członków zespołu.

###### Product Owner
Odpowiada za wizję produktu i kwestie związane z funkcjonalnościami. 
Powinien podejmować ostateczne decyzje odnośnie do wątpliwości związanych z wymaganiami i wyjaśniać je z klientem.
Bardzo pożądane jest, aby często konsultował się z klientem i starał się, aby reszta zespołu mogła się skupić na swoich zadaniach zamiast doprecyzowywaniu wymagań.

###### Development Manager
Oczywiście Klientowi zależy najbardziej na tym, aby projekt zakończył się na czas. 
Dlatego zespół będzie nieustannie przez niego kontrolowany.
Jednakże, w trakcie pracy ważne jest, aby uzyskać zaufanie klienta i te kontrole nie były w ogóle potrzebne.
Development Manager będzie dbał odpowiednio o terminy, podział zadań, a także wywiązywanie się z obowiązków innych członków zespołu.
Powinien też kontrolować jakoś pracy — np. poprzez pilnowanie regularnych Code Review lub organizowanie programowania w parach (jeśli Wasz mentor jest za takimi praktykami).
Jeśli spełni odpowiednio swoją funkcję, to duża szansa, że uda wam się uformować efektywny i zgrany zespół, a klienci nie będą wypatrywali tylko na wasze potknięcia :)
W gestii Development Managera leży też organizowanie codziennych daily. Najlepiej, aby przyjęły formę wiadomości na Discord. 
W ciągu dnia każda osoba z zespołu powinna odpowiedzieć na 3 pytania:
- Co zrobiła od ostatniego daily?
- Co planuje zrobić do kolejnego daily?
- Czy są jakieś problemy przy wykonywaniu zadań?
Oczywiście poprawną odpowiedzią w przypadku CodersCamp jest też: 
```
1. Od ostatniego daily zaimplementował zadanie. Wystawiłem Pull Request (TUTAJ), proszę Was o code review.
2. Do kolejnego nic nie zrobię - całą środę pracuję. Zamierzam posiedzieć nad projektem dopiero od czwartku. 
3. Mam problem z połączeniem z SWApi, czy ktoś mógłby zerknąć, błąd opisałem w issue na GitHub.
```
Mogą być takie dni, że nie uda nam się zrobić nic albo po prostu nie planowaliście poświęcać czasu na CodersCamp, czy byliście cały dzień w pracy. 
Najważniejsza jest komunikacja, aby wiedzieć, jaki jest status projektu.
Warto też organizować co tydzień zdzwonki, aby nie tylko pisać, ale też porozmawiać jak idzie projekt i ewentualnie poprosić mentora o pomoc / wyjaśnienia itp. 
Pamiętajcie, że mentor jest ciągle do waszej dyspozycji, więc nie musicie specjalnie czekać, żeby się z nim skomunikować.


##### Sposób oceny projektu (i wszystkich kolejnych projektów na CodersCamp)
Zapewne interesuje Was, w jaki sposób projekt zostanie „zaliczony” i oceniony.
Ocenianie będzie miało kilka etapów i trochę różni się od projektu pierwszego.
Wynika to z tego, że teraz realizujecie projekt zespołowo i jesteście oceniani jako zespół.

- Kiedy skończycie pracę nad projektem, odnotujcie ten fakt w specjalnie przygotowanym formularzu — dostępnym [TUTAJ](https://docs.google.com/forms/d/e/1FAIpQLScAFLQ2KHcOhS9mlZd_2ngq46hkXKkFOb8HjiILvMciGM35nw/viewform).
Powinno to nastąpić najpóźniej o godzinie 23:59 dnia poprzedzającego prezentację projektu (data dostępna w harmonogramie kursu).
Zgłosić projekt do oceny jest obowiązkiem osoby pełniącej funkcję Development Managera. 
Powinna ona zadbać, aby do tego czasu wszystko było już dopięte na ostatni guzik.
- Spotkajcie się w wyznaczonym dniu jeszcze z 2 innymi zespołami i ich mentorami (np. za pomocą Google Meet). 
W trakcie spotkania każdy zespół prezentuje wykonany projekt. 
Dlatego zdecydujcie, kto to zrobi z Waszego zespołu. 
Liczba osób jest dowolna, ale nie powinien tego robić mentor.
W przygotowanie prezentacji powinni zaangażować się wszyscy uczestnicy.
Forma prezentacji pozostaje dowolna (musi zmieścić się w 10 minutach + 5 minut na pytania). 
Filmik, odegranie scenki, prezentacja multimedialna. Dozwolone jest wszystko, co wam przyjdzie na myśl (oczywiście w granicach dobrego smaku).
Na pewno musi zostać pokazana działająca aplikacja, reszta wg Waszego uznania. 
Celem prezentacji jest „sprzedanie” (pokazanie, że to, co zrobiliście, spełnia założenia) Waszej aplikacji osobom obecnym na spotkaniu.
- Po prezentacji mentor Waszego zespołu oceni projekt wg kryteriów opisanych w specjalnym arkuszu — przykład takiego arkusza możecie zobaczyć [TUTAJ](https://docs.google.com/spreadsheets/d/1mjCi-oDXILKoCReqJlhGYP4NW-HVMCzvdcIy6ntnsog/edit?usp=sharing). Na dole wybierzcie zakładkę odpowiedniego projektu, np. "Projekt 2". 
Dokładnie taką samą ocenę przeprowadzi jeden z mentorów obecnych na spotkaniu — tzw. mentor recenzent.
Mentor Waszego zespołu dodatkowo określi też, jakie było zaangażowanie każdej osoby w projekt — więc postarajcie się dać z siebie 100 w trakcie pracy!
Składa się na to między innymi: terminowość, spełnianie funkcji w projekcie, pomoc innym.
Pamiętajcie też odpowiednio opracować README.md Waszego projektu, tak aby prezentowało kto, co, jak i dlaczego zostało wykonane.
Zawartość tego pliku możecie przenieść gdzieś indziej albo jedynie zostawić link prowadzący do używanego repozytorium szablonowego. 
README.md waszego repozytorium powinno być wizytówką aplikacji. Koniecznie musi się w nim znaleźć link do działającego DEMO.
Dotyczy to tego i wszystkich kolejnych projektów. 
- Po zrecenzowaniu waszych projektów mentor powinien przekazać każdemu jego ocenę zaangażowania i feedback jako uzasadnienie.
Ocena projektu jest wspólna dla całego zespołu i jest równa średniej z ocen obu mentorów.
- Ostateczna punktacja dla uczestnika to procent jego zaangażowania z oceny projektu.
Pamiętajcie, że ocena nie jest najważniejsza — im więcej pracy wykonacie, tym więcej praktycznych umiejętności opanujecie.
Zachęcamy mentorów do uzasadniania przydzielonych punktów, tak abyście mogli wyciągnąć z nich, jak najwięcej na przyszłość.
Mentorzy mają różne doświadczenie zawodowe i będą z pewnością właśnie oceniać projekty przez jego pryzmat. 
Dzięki zmianom mentorów recenzentów zobaczycie z pewnością różne spojrzenia na podobne kwestie.

## Warszawski ZbiorKom
Do waszej firmy zgłosił się inwestor, który ma pomysł na aplikację ułatwiającą poruszanie się po warszawie.
Warszawski ZbiorKom to aplikacja webowa ułatwiająca korzystanie z warszawskiej komunikacji publicznej.
Wykorzystuje publiczne API Urzędu Miasta Warszawy do wyszukiwania lini autobusowych i tramwajowych.
Pozwala sprawdzić kiedy odjedzie najbliższy autobus lub tramwaj z interesującego nas przystanku.
Ponadto możemy śledzić w czasie rzeczywistym pojazdy na interesującej nas linii.

### Funkcjonalności
- Wyświetlenie listy linii autobusowych/tramwajowych odjeżdżających z wybranego przystanku
    - Użytkownik powinien mieć możliwość podejrzenia najbliższej godziny odjazdu każdej z linii
- Wyświetlenie rozkładu jazdy wybranej linii z zadanego przystanku
    - Domyślnie powinien być widoczny rozkład na bieżący dzień
    - Użytkownik ma możliwość wybrania innej daty
- Możliwość śledzenia wszystkich pojazdów na wybranej linii na mapie w czasie rzeczywistym
    - Pozycje pojazdów powinno odświeżać się maksymalnie co 60s
    - Pojazdy powinny być oznaczone na mapie markerami
    - Przystanki na linii powinny być oznaczone markerami
    - Mapa inicjalnie powinna zostać wyskalowana tak, aby cała liniia była widoczna (z możliwością przybliżania i oddalania widoku)
    
### Dodatkowe funkcjonalności (do zaimplementowania jeśli zespół zdąży z podstawowym zakresem)
- Podpowiadanie najbliższego przystanku na podstawie lokalizacji użytkownika
- Wybór przystanku po kliknięci w marker na mapie 
- Speech Recognition API do wprowadzania nazwy przystanku

### Pozostałe informacje
Jako źródło danych należy wykorzystać [API UM Warszawy](https://api.um.warszawa.pl/).
Waszym zadaniem będzie zaimplementować aplikację, aby działała wg wymagań klienta, a także przygotować i wykonać
wersję responsywną aplikacji (przede wszystkim dostosowaną do wyświetlania na Tabletach i Telefonach — możecie przygotować najpierw projekt interfejsu, lub od razu przejść do implementacji).
W celu zaprezentowania działania aplikacja musi być możliwa do odwiedzenia w internecie.
Klient nie chce ponosić za to żadnych dodatkowych kosztów, dlatego należy wykorzystać jedną z usług oferujących darmowe
uruchomienie takiej aplikacji (np. GitHub Pages).
Klient wymaga także, aby aplikacja nie tylko działała, ale była odpowiednio pokryta testami.
Naprawdę macie szczęście co do klienta! Wielu uważa testy za niepotrzebne i jedynie stratę pieniędzy.
A co znaczy „odpowiednio pokryta”? To już należy właśnie ustalić z samym Klientem :) 
Wszelkie nieścisłości w wymaganiach powinien wyjaśniać Product Owner wraz z Klientem.


### Kod startowy projektu
Nad aplikacją pracę wcześniej zaczęli też inni programiści, po których otrzymujecie mały kawałek kodu.
Oto co zostało już przygotowane (możecie oczywiście dowolnie to zmieniać i konfigurować zgodnie z potrzebami zespołu):

1. Zostały skonfigurowane GitHub Actions. W podobny sposób jak w pierwszym projekcie. Po wykonaniu kroków opisanych poprzednio 
Wasza aplikacja powinna zostać wdrożona na GitHub Pages.
1. Aplikacja jest budowana przy pomocy narzędzia Parcel, z którym mieliście okazję się zapoznać w materiałach.
1. Został dodany framework do testów — Jest w sposób opisany [TUTAJ](https://ryankubik.com/blog/parcel-and-jest/).
    - Testy powinny zostać umieszczone w katalogu `test`. Kod produkcyjny (testowany) w katalogu `src`.

#### Uruchomienie projektu
Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:
1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run start:dev`

Aplikacja będzie dostępna pod adresem [localhost:8765/index.html](localhost:8765/index.html)

Kod produkcyjny aplikacji umieszczamy w katalogu `src`.

#### Uruchomienie testów
Dodając swoje 5 groszy do naszej aplikacji, pamiętaj o pokryciu kodu testami.
Aby uruchomić testy aplikacji, wykonaj następujące kroki:
1. Zainstaluj zależności za pomocą komendy: `npm install` (jeśli nie zrobiłeś już tego wcześniej).
1. Uruchom testy, wykonując komendę: `npm run test`. Testy z raportem pokrycia uruchomisz za pomocą: `npm run test:cov`.

Kod testów umieszczamy w katalogu `test`.

## Dodatkowe zadania (wykraczające poza zakres kursu):
Jeśli starczy Wam czasu, zachęcamy do wykonania chociaż jednego z wymienionych poniżej. 
Możliwe jest też dodanie zaprojektowanej przez Was funkcjonalności. 
Wszelkie inne dodane przez Was funkcjonalności czy usprawnienia infrastrukturalne należy przedstawić w README.md projektu :)

Rozszerzenia, które my proponujemy do wykonania, to:

- Ograniczenie liczby requestów po zewnętrze zasoby poprzez zastosowanie wybranego przez zespół sposobu cache.
- Utworzenie z aplikacji pliku wykonywalnego, który mógłby działać jako aplikacja Desktop dołączana do płatków śniadaniowy. 
    Możecie do tego użyć [Electron](https://www.electronjs.org/docs/tutorial/first-app). Należy wtedy dodać w aplikacji przycisk: „POBIERZ WERSJĘ OFFLINE".
- Wykonanie testów E2E, przy użyciu odpowiedniego narzędzia. Proponujemy np. Cypress.
- **Wykonanie tego punktu, jak i wszystkich dodatkowych jest w pełni opcjonalne.** Aby nie narazić się na koszty, pamiętajcie, że Google Cloud Platform Free Trial obowiązuje tylko dla nowych kont. Firmy programistyczne bardzo rzadko piszą swoje systemu od zera, bardzo często korzysta się z dostarczonych już rozwiązań. Szczególnie poprzez wykorzystanie technologi w chmurach, takich jak AWS, Google Cloud czy Azure. Bardzo pożądane jest, aby mieć jakieś doświadczenie w tych kwestiach. Dlatego w tym punkcie proponujemy, aby odpowiedź komputera generowana była przy pomocy [Google Vision API](https://cloud.google.com/vision/docs). Jesto to usuługa dostępna w Google Cloud Platform. Aby było możliwe wykonanie zapytania, konieczne jest wygenerowanie ApiKey, umożliwiające dostęp do Google Vision API. Powinno ono być definiowane w ustawieniach gry, tak jak pokazano na projekcie w Figma. W przypadku nie zdefiniowania API Key używany będzie poprzednio zaimplentowany algorytm komputera. API Key przetrzymywać należy jedynie w pamięci  aplikacji. Generowanie odpowiedzi przebiega w następujący sposób:
    - zdjęcie jest przesyłane do GoogleVision API, z którego bierze się najwyższy wynik prawdopodobieństwa rozpoznania (albo kilka z nich, algorytm trzeba ustalić)
    - przeszukiwane są wyniki działania GoogleVision dla zdjęcia, czy któryś z nich pokrywa się z odpowiedzią (ustalić stopień podobieństwa, np. odpowiedź to może być Jabba, a Google API zwróci "Jabba The Hutt")
    - Skorzystanie z Google Vision API wymaga założenia konta w usłudzie Google Cloud Platform. Dla nowych użytkowników Google oferuje tzw. [Google Cloud Free Program](https://cloud.google.com/free/docs/gcp-free-tier), dzięki któremu po założeniu konta, nie zostaniesz obciążony żadnymi kosztami przez 90 dni korzystania z usługi. To z pewnością wystarczy na realizację tego projektu. Wymagane jest podłączenie karty płatniczej, ale dopóki na to nie pozwolisz, nie powinieneś zostać obciążony kosztami. Tak jak mówi treść przywołanej strony:
 ```
To complete your Free Trial signup, you must provide a credit card or other payment method to set up a Cloud Billing account and verify your identity. Don't    worry, setting up a Cloud Billing account does not enable us to charge you. You are not charged unless you explicitly enable billing by upgrading your Cloud Billing account to a paid account. You can upgrade to a paid account at any time during the trial. After you have upgraded, you can still use any remaining credits (within the 90-day period).
 ```
 Tutaj dostępna jest polska instrukcja zakładania konta: https://flyonthecloud.com/pl/blog/konto-gcp-rejestracja-konfiguracja/#Zakladanie_konta_Google_Cloud_Platform
    

## Technologie do wykorzystania:
- JavaScript
- HTML
- CSS
- API UM Warszawy
- opcjonalnie: Google Vision API / Electron.js / Cypress

**Uwaga:** Każda inna technologia / Biblioteka jak najbardziej mile widziana, jeśli pomoże Ci osiągnąć zamierzony cel — zgodnie z opisanymi na początku zasadami :) 


## Porady odnośnie do projektu
- Dzięki testing-library, elementy widoku (DOM) można testować wg Guide: https://testing-library.com/docs/dom-testing-library/example-intro
