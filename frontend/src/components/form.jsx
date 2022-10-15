import uuid from "react-uuid";
import "./Form.css";

const ID = `alimenty-${uuid()}`;

function Form(props) {
    return (
        <form className="bg-red-300 m-auto p-12 text-lg">
            <h4 className="text-sm">Identyfikator sprawy: {ID}</h4>
            <input type="hidden" name="id" value={ID} />
            <div className="date text-right">
                <span className="city">
                    <input type="text" name="" />,{" "}
                </span>
                <span className="date">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="court flex flex-col text-right w-fit ml-auto font-bold">
                <span className="text-left region">
                    Sąd Rejonowy w <input type="text" name="" />
                </span>
                <span className="text-left department">
                    Wydział <input type="text" name="" />
                </span>
                <div className="text-left address flex flex-col">
                    <span>
                        <select name="">
                            <option value="ul">ul.</option>
                            <option value="al">al.</option>
                        </select>&nbsp;
                        <input type="text" name="" />
                    </span>
                    <span>
                        <input type="text" name="" /> <input type="text" name="" />
                    </span>
                </div>
            </div>
                <span className="font-bold">Powód:</span>
            <div className="claimant flex flex-col ml-12">
                <span className="name">małoletni: <input type="text" name="" /></span>
                <span className="addres">Adres: 
                    <span>
                        <select name="">
                            <option value="ul">ul.</option>
                            <option value="al">al.</option>
                        </select>&nbsp;
                        <input type="text" name="" />
                    </span>,&nbsp;
                    <span>
                        <input type="text" name="" /> <input type="text" name="" />
                    </span>
                </span>
                <span className="pesel">PESEL: <input type="text" name="" maxLength={11}/></span>
                <span className="representant">
                    zastępowany przez&nbsp;
                    <select name="">
                        <option value="m">matkę</option>
                        <option value="o">ojca</option>
                        <option value="op">opiekuna prawnego</option>
                    </select>&nbsp;
                    <input type="text" name="" />
                </span>
                <span className="pesel">PESEL: <input type="text" name="" maxLength={11}/></span>
            </div>
            <span className="font-bold">Pozwany:</span>
            <div className="defendant flex flex-col ml-12">
                <span className="name"><input type="text" name="" /></span>
                <span className="adress">
                <span>
                        <select name="">
                            <option value="ul">ul.</option>
                            <option value="al">al.</option>
                        </select>&nbsp;
                        <input type="text" name="" />
                    </span>,&nbsp;
                    <span>
                        <input type="text" name="" /> <input type="text" name="" />
                    </span>
                </span>
            </div>
            <span className="wps font-bold">
                w.p.s {2 / 2} (12-krotność kwoty alimentów wskazanej w punkcie 1
                pozwu)
            </span>
            <h3 className="font-bold uppercase text-center">
                Pozew o Alimenty
            </h3>
            <div className="content">
                <span>
                    Powołując się na załączone pełnomocnictwo procesowe,
                    niniejszym wnoszę o:
                </span>
                <ol className="list-decimal list-inside pl-10">
                    <li>
                        zasądzenie od pozwanego <input type="text" name="" />{" "}
                        imię i nazwisko na rzecz mał. powoda
                        <input type="text" name="" /> imię i nazwisko,
                        urodzonego w dniu <input type="date" name="" /> r.
                        alimentów w kwocie <input type="number" name="" id="" />{" "}
                        zł miesięcznie, płatnych z góry do rąk matki/ojca powoda
                        do dnia <input type="number" name="" /> każdego
                        miesiąca, z ustawowymi odsetkami w razie opóźnienia w
                        płatności którejkolwiek z rat;
                    </li>
                    <li>
                        udzielenie zabezpieczenia roszczenia wskazanych w
                        punkcie 1 pozwu poprzez zasądzenie od pozwanego na rzecz
                        małoletniego powoda alimentów w kwocie
                        <input type="number" name="" /> zł miesięcznie, płatnych
                        z góry do rąk matki/ojca powoda do dnia
                        <input type="number" name="" /> każdego miesiąca, z
                        ustawowymi odsetkami w razie opóźnienia w płatności
                        którejkolwiek z rat - na czas trwania postępowania;
                    </li>
                    <li>
                        przeprowadzenie dowodu z dokumentów załączonych do
                        niniejszego pozwu, a mianowicie:{" "}
                        <input type="text" name="" /> wskazanie dokumentów,
                        które następnie będą załączane do pozwu;
                    </li>
                    <li>
                        inne zobowiązania (np. kiedy chcemy żeby sąd zobowiązął
                        pozwanego do złożenia dodatkowych dokumentów)
                    </li>
                    <li>
                        fakultatywnie: przeprowadzenie dowodu z zezn.{" "}
                        <input type="text" name="" /> (imię nazwisko i adres) na
                        fakt usprawiedliwionych potrzeb małoletniego powoda;
                        sytuacji matki powoda oraz możliwości zarobkowych
                        pozwanego;
                    </li>
                    <li>
                        przesłuchania stron na okoliczność{" "}
                        <input type="text" name="" /> usprawiedliwionych potrzeb
                        małoletniego, jej sytuacji finansowej, możliwości
                        zarobkowych pozwanego;
                    </li>
                    <li>
                        zasądzenie od pozwanego na rzecz powoda zwrotu kosztów
                        zastępstwa procesowego, według norm przepisanych.
                    </li>
                </ol>
                <span>
                    Czy była prowadzona mediacja lub inna forma ugodowego
                    zakończenia sporu - na zasadzie tak/nie - jeśli nie to
                    dlaczego
                </span>
                <br />
                <textarea name="mediation" className="w-full h-40"></textarea>
                <h3 className="uppercase font-bold text-center">
                    Uzasadnienie
                </h3>
                <div className="flex flex-col">
                    <span>
                        Małoletni powód pochodzi ze związku{" "}
                        <input type="text" name="" /> i{" "}
                        <input type="text" name="" /> urodził się{" "}
                        <input type="date" name="" /> w{" "}
                        <input type="text" name="" />
                    </span>
                    <span>
                        Dowód: <input type="file" name="proof" />
                    </span>
                    <span>
                        Powód zamieszkuje z <input type="text" name="" />
                    </span>
                    <span className="mt-4">
                        Koszty utrzymania domu obejmują:
                    </span>
                    <ul className="list-disc list-inside pl-3 mb-4">
                        <li>
                            opłatę za energię elektryczną -{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            opłatę za wodę i wywóz nieczystości{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            podatek - <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            gaz - <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            koszty ogrzewania - <input type="number" name="" />{" "}
                            / miesiąc
                        </li>
                    </ul>
                    <span>Koszty utrzymania dziecka obejmują:</span>
                    <ul className="list-disc list-inside pl-3 mb-4">
                        <li>
                            wyżywienie - ok. 450,00-600,00 zł miesięcznie (ok.
                            15,00- <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            kosmetyki i środki higieny - ok. 100{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            odzież i buty - ok. 100{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            leki i witaminy - ok. 50,00-100{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            wizyty lekarskie - ok. 50,00-100{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            zabawki, gry i książki edukacyjne - ok. 100{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            wyjścia na basen, do kina - ok. 50{" "}
                            <input type="number" name="" /> / miesiąc
                        </li>
                        <li>
                            wyjazdy wakacyjne - <input type="number" name="" />{" "}
                            / miesiąc
                        </li>
                        <li>
                            inne wydatki - ok. <input type="number" name="" /> /
                            miesiąc
                        </li>
                    </ul>
                    <h3 className="font-bold">Inne niezbędne informacje:</h3>
                    <textarea name="more"></textarea>
                    <span>
                        Mając na względzie powyższe, wnoszę jak na wstępie.
                    </span>
                </div>
            </div>
        </form>
    );
}

export default Form;
