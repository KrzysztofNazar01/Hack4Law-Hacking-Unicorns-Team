# Hack4Law-Hacking-Unicorns-Team

## Live page
This web app is avaliable live with [this link](address)

## Running the application

'''
    python manage.py runserver
'''
## Task description
Elektroniczne postępowanie upominawcze jako system teleinformatyczny obsługuje elektroniczne postępowanie upominawcze. Pisma wniesione za pośrednictwem systemu wywołują skutki prawne, jakie ustawa wiąże z wniesieniem do sądu. Pisma procesowe mają postać gotowych do uzupełnienia elektronicznych formularzy. Przedmiotowe znacznie minimalizuje ryzyko popełnienia błędu. Należy przy tym zauważyć, że EPU zajmuje się tylko sprawami nieskomplikowanymi i stosunkowo prostymi do rozstrzygnięcia.

W przypadku spraw skomplikowanych, pozwów tradycyjnych, powód nie posiada elektronicznego formularza, który jest gotowy do uzupełniania. Rozwiązanie powinno stanowić pomoc w wypełnieniu pozwu, umożliwiać zebranie materiału dowodowego, jego analizę, podpowiadać treść (bloki tekstowe), automatycznie wskazywać właściwość, wartość przedmiotu sporu, stan faktyczny i prawny.
## Plan of project
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
 - automatyzcja obliczania kosztow
 - co bedzie innowacyjne w tym podejsciu?
 
