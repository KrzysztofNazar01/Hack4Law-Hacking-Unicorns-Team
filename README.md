# Hack4Law Hacking Unicorns Team

## Authors
 - **Karolina Wilamowska** - buisness side
 - **Samuel Jędrzejewski** - frontend developer
 - **Michał Woźniak** - frontend developer
 - **Krzysztof Nazar** - backend developer


## The goal of the project
🇵🇱

Ten projekt powstał jako rozwiązanie [Hack4Law](https://hack4law.pl/) - hackathon, który łączy technologie i prawo. Była to druga edycja tego wydarzenia - pierwsz miała miejsce w 2021 r. W tegorocznej edycji wzięło udział około 60 uczestników, którzy stworzyli razem 15 drużyn. 

**Pomysł naszej drużyny, to stworzenie aplikacji webowej udostępniające formularze pozwów, która ułatwi ich wypełnianie oraz umożliwi płynną komunikację pomiędzy urzędami.** Dzięki wspólnej bazie danych, wypełnienia formualrzy będą dostępne dla odpowiednich instytucji sądowych. Jest to innowacyjne podejście, ponieważ aktualne serwisy sądowych instytucji zostały założone przez różne firmy i w różnych środowiskach. Nasze rozwiązanie pozwoliłoby ujednolicić i ustandaryzować wymianę informacji pomiędzy urzędami. Istotny jest także fakt, że dzięki naszemu systemowi dojdzie do mniejszej ilości błędów ludzkich, ponieważ podstawowe operacje zostaną zautomatyzowane. Na naszej stronie jest dostępny formularz pozwu alimentacyjnego służący za przykład. W przyszłości możliwe jest zaimplementowanie kolejnych formularzy prezentujące wnioski gotowe do wypełnienia. Po wypełnieniu wniosku, odpowiedzi wysyłane są do odpowiedniej instyucji wybieranej na podstawie kodu pocztowego z adresu zamieszkania pozywacjącego. Użytkownik może także zapisać formularz w formacie PDF, a następnie wydrukować swój wniosek. 

Szczegóły projektu znajdują się w punkcie dotyczącym [Założeń projektu](#task-assumptions). 


🇬🇧

This project was created as a solution to task during [Hack4Law](https://hack4law.pl/) - a hackathon that connects echnology with law. It was the second edition of this event - the first one took place in 2021. In this edition there were about 60 participants who created 15 teams.

**The idea of our team is to create a web application that provides document templates. The application allows to fill them online and enables a clear form of exchanging information between the courts.** Thanks to a common database, the completed forms will be available to appropriate court institutions. This is an innovative approach because the current court services of institutions have been set up by different companies and using different technologies. Our solution would unify and standardize the exchange of information between the institutions. It is also important that thanks to our system, there will be fewer human errors, as the basic operations will be automated. An example form for a claim for maintenance is available on our website. In the future, we intend to implement further applications ready to be filled out. After completing the application, the responses are sent to the appropriate institution selected on the basis of the postal code from the address of the respondent. The user can also save the form in PDF format and then print the document.

Further details of the project can be found in the [Task assumptions point](#task-assumptions).

## Live page
🇵🇱

Zobacz tą stronę na żywo [pod tym linkiem](https://elawsuit-programming-unicorns.herokuapp.com/polls)



🇬🇧

This web app is avaliable live with [this link](https://elawsuit-programming-unicorns.herokuapp.com/polls)

## Running the application
🇵🇱

Aplikacja działa domyślnie na porcie 8080.

```python
python manage.py runserver
```

Wejdź na stronę wpisując w przeglądarkę [127.0.0.1:8000/polls/](127.0.0.1:8000/polls/).



🇬🇧

The app will run by default on port 8080.

```python
python manage.py runserver
```

Acces the main page on [127.0.0.1:8000/polls/](127.0.0.1:8000/polls/).


## Task assumptions
🇵🇱

Założenia:
 1.	Formularz pozwu alimentacyjnego – w wersji prezentowanej pozew o alimenty (zakładając rozwój aplikacji przewidujemy inne warianty pozwu – o podwyższenie alimentów, o wygaśnięcie obowiązku alimentacyjnego, o obniżenie alimentów);
 2.	W pozwie alimentacyjnym przewidujemy rozwiązanie w postaci kalkulatora wysokości alimentów – na podstawie zaproponowanych kategorii przeliczany jest miesięczny koszt utrzymania, stanowiący bazę do ustalenia wysokości dochodzonych alimentów;
 3.	W formularzu pozwu zakładamy, iż aplikacja weryfikować będzie właściwość miejscową sądu oraz wskazywać właściwy wydział dla danego adresu; 
 4.	W formularzu, na podstawie dochodzonej wysokości żądania alimentacyjnego automatycznie liczona jest wartość przedmiotu sporu;
 5.	Formularz zawiera podpowiedzi jakie załączniki powinny zostać załączone (odpisy aktów urodzenia; faktury potwierdzające wydatki; zaświadczenie o dochodach);
 6.	W wariancie podstawowym, zainteresowana strona może wydrukować wygenerowany pozew, podpisać i złożyć do sądu wraz z załącznikami;
 7.	W wersji bardziej zaawansowanej, pozew zostaje wygenerowany w systemie, opatrzony bezpiecznym podpisem i złożony do sądu (zakładamy integrację z systemem sądowym pozwalającym na otrzymanie dokumentacji, nadanie sygnatury i procedowanie);
 8.	Przewidujemy funkcjonalność polegającą na tym, iż strona wskazuje w pozwie numer aktu stanu cywilnego, który jest pobierany przez sąd po otrzymaniu akt – rozwiązanie takie z jednej strony pozwoli na ograniczenie konieczności drukowania dokumentów z aktów stanu cywilnego, ograniczy związane z tym koszty – w tym przypadku strona jest zwolniona od opłaty skarbowej, ponadto przyspieszy postępowanie, bowiem częstokroć strona zmuszona jest oczekiwać na możliwość odebrania z urzędu dokumentu akt stanu); oczywiście zakłada to możliwość pozyskania przez sąd takiego dokumentu, co jest niezależne od nas;
 9.	W ramach dalszej funkcjonalności – w przypadku pozwów, gdzie po stronie powodowej jest zobowiązany, a nie uprawniony – zakładamy powiązanie z modułem pozwalającym na automatyczne uiszczenie płatności – bądź to w systemie płatności sądowych, bądź w formule szybkiego przelewu, względnie dołączenia dokumentu potwierdzającego przelew); wysokość opłaty winna zostać wygenerowana bezpośrednio na podstawie wyliczonej wartości przedmiotu sporu;
 10.	Dalsza funkcjonalność zakłada również możliwość złożenia przez stronę wniosku o zwolnienie od kosztów (dotyczy zobowiązanego) oraz wniosku o ustanowienie pełnomocnika.

## Task description
🇵🇱

Elektroniczne postępowanie upominawcze jako system teleinformatyczny obsługuje elektroniczne postępowanie upominawcze. Pisma wniesione za pośrednictwem systemu wywołują skutki prawne, jakie ustawa wiąże z wniesieniem do sądu. Pisma procesowe mają postać gotowych do uzupełnienia elektronicznych formularzy. Przedmiotowe znacznie minimalizuje ryzyko popełnienia błędu. Należy przy tym zauważyć, że EPU zajmuje się tylko sprawami nieskomplikowanymi i stosunkowo prostymi do rozstrzygnięcia.

W przypadku spraw skomplikowanych, pozwów tradycyjnych, powód nie posiada elektronicznego formularza, który jest gotowy do uzupełniania. Rozwiązanie powinno stanowić pomoc w wypełnieniu pozwu, umożliwiać zebranie materiału dowodowego, jego analizę, podpowiadać treść (bloki tekstowe), automatycznie wskazywać właściwość, wartość przedmiotu sporu, stan faktyczny i prawny.

## Main functionalities
🇵🇱
 1. Strona [127.0.0.1:8000/polls/form/](127.0.0.1:8000/polls/form/) wyświetla formularz.
 2. Strona [127.0.0.1:8000/polls/form/<id>](127.0.0.1:8000/polls/form/<id>) pokazuje szczegóły odpowiedzi o danym id. Jeśli w bazie odpowiedzi nie ma odpowiedzi o danym id, zwracany jest plik JSON z informacją o błędzie. 
 3. Strona [127.0.0.1:8000/polls/courtsinfo/](127.0.0.1:8000/polls/courtsinfo/) zwraca plik JSON zawierający podstawowe informacje na temat sądów rejonowych w Polsce. 
 4. Strona [127.0.0.1:8000/login/](127.0.0.1:8000/login/) pozwala na logowanie użytkownika.
 5. Strona [127.0.0.1:8000/logout/](127.0.0.1:8000/logout/) pozwala na wylogowanie użytkownika.
 6. Strona [127.0.0.1:8000/admin/](127.0.0.1:8000/admin/) pozwala na zarządzanie bazą danych oraz bazą użytkowników.

 
🇬🇧
 1. Page [127.0.0.1:8000/polls/form/](127.0.0.1:8000/polls/form/) show the form to fill out.
 2. Page [127.0.0.1:8000/polls/form/<id>](127.0.0.1:8000/polls/form/<id>) show the details about the form of particular id. If wrong id is used, a JSON file with error message is returned.
 3. Page [127.0.0.1:8000/polls/courtsinfo/](127.0.0.1:8000/polls/courtsinfo/) displays JSON file representing all avaliable courts in the database. Can be used with AJAX to make the proccess of filling out the form more comfortable for the user.
 4. Page [127.0.0.1:8000/login/](127.0.0.1:8000/login/) allows to login.
 5. Page [127.0.0.1:8000/logout/](127.0.0.1:8000/logout/) allows to logout.
 6. Page [127.0.0.1:8000/admin/](127.0.0.1:8000/admin/) allows to manage the database and the users.


## Plan of project
🇵🇱
 - topic: E-pozew (złóż mnie)
 - o tym jakie dokuemnty trzeba zlozyc do pisma, sa wpisane w kodeksie. Za kazdym razem te elementy są troche inne.
 - każdy sąd ma swój wzorzec dokumnetów
 - typy fomrualrzy:
    - alimenty:
        - najpierw wyszukaj sad na podstawie kodu pocztowego
        - strony: podajemy odpowiednie dane
        - wolne od oplaty sadowej - nie trzeba nic placic
        - wskazac wartosc przedmitu sporu -> 12sto krotnosc miesiecznych alimentow --> trzeba to obliczyc autoamtycznie
        - uzupelnienie tekstu z tytulem "pozew o alimenty"
        - okienko alternatywne ("wnosze o udzielnie zabezpieczenia")-> jest mozliwosc aby aliemnty placone 
        - czy strony podjemy mowe mediacji. Jesli nie, to dlaczego?
        - uzupelnic uzasadnienie. Potrzebne dodawanie zalacznikow. Podanie kosztow zwiazanych z utrzymaniem. Dobrze zeby byly podpowiedzi --> np koszty miesieczne edukacji, odziezy, leczenia, higieny, wyzywienia, itd. Zobacz "kalulatory alimentow" -> obliczenie ile wynosi miesieczny koszt utrzymania dziecka. 
        - rubryka na dodatkowe informacje. 
        - załączone dokumenty -> odpisy, informacje o kosztach

    - pozew o zaplate --> najprostrzy (bardzo powtarzalny, gotowe pytania, trzeba dodawac odpowiednie załączniki jako dowody w sprawie)
    - stwierdzenie nabycia spadku --> z testamentu, albo z ustawy. 
    - postepowania klauzulowe --> jest juz jakis wyrok. wystepujemy do sadu, o prosbe wydania kaluzili wykonalnosci (zgody). Sąd ma weryfukowac dane i prosbe. Dokument musi miec jakis sposob werfyikacji autentycznosci dokumentu. Jeśli sąd wyda zgode, to sąd powinien przekazac go do komornika. 

są sprawy, które nie mają schematu, bo są za bardzo indywidualne i "egzotyczne" --> dla nich nie da się zrobić prostego formularza

 - wyszukiwarka sądu --> wlasciwosci sadu, nr konta bankowego sądu na ktorego nalezy skierowac oplate, znajdz sad dla konkretnego miasta (na podstawie kodu pocztowego --> uzywac jakiegos API?/bazy danych)

 - dwie mozliwosci wysalnia formularza:
   - wygenerowac dokument i wyslac go mailem
   - wygenerowac dokument i wydrukowac go i zaniesc do sadu

problem:
 - nie mozna sie wgl zapytac sadu elektronicznie
 - zalezy od humoru pracownikow sądu



## Future improvements
 🇵🇱
 - automatyzcja obliczania kosztow
 - polaczyc sie z azurem
 - logowanie z profilu zaufanego
