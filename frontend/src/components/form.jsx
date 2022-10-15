import { useRef } from "react";
import uuid from "react-uuid";
import "./Form.css";

const ID = `alimenty-${uuid()}`;

function handleForm(e) {
    e.preventDefault();
}

function Form(props) {
    const wps = useRef();
    function handleChange(e) {
        wps.current.textContent = e.target.valueAsNumber * 12 || 0;
    }

    return (
        <form className="bg-red-300 m-auto p-12 text-lg" onSubmit={handleForm}>
            <h4 className="text-sm">Identyfikator sprawy: {ID}</h4>
            <input type="hidden" name="id" value={ID} />
            <div className="date text-right">
                <span className="city">
                    <input type="text" name="city" className="text-right" />,{" "}
                </span>
                <span className="date">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="court flex flex-col text-right w-fit ml-auto font-bold">
                <span className="text-left region">
                    Sąd Rejonowy w <input type="text" name="court_city" />
                </span>
                <span className="text-left department">
                    Wydział <input type="text" name="court_department" />
                </span>
                <div className="text-left address flex flex-col">
                    <span>
                        <select name="court_address_type">
                            <option value="ul">ul.</option>
                            <option value="al">al.</option>
                        </select>&nbsp;
                        <input type="text" name="court_address_street"/>
                    </span>
                    <span>
                        <input type="text" name="court_address_code" placeholder="Kod pocztowy" className="text-right" /> <input type="text" name="court_address_city" placeholder="Miasto" />
                    </span>
                </div>
            </div>
                <span className="font-bold">Powód:</span>
            <div className="prosecutor flex flex-col ml-12">
                <span className="name">małoletni: <input type="text" name="prosecutor_name" placeholder="Imię i nazwisko" /></span>
                <span className="addres">Adres: 
                    <span>
                        <select name="prosecutor_address_type">
                            <option value="ul">ul.</option>
                            <option value="al">al.</option>
                        </select>&nbsp;
                        <input type="text" name="prosecutor_address_street" />
                    </span>,&nbsp;
                    <span>
                        <input type="text" name="prosecutor_address_kod" /> <input type="text" name="prosecutor_address_city" />
                    </span>
                </span>
                <span className="pesel">PESEL: <input type="text" name="prosecutor_pesel" maxLength={11}/></span>
                <span className="representant">
                    zastępowany przez&nbsp;
                    <select name="prosecutor_parent_type">
                        <option value="m">matkę</option>
                        <option value="o">ojca</option>
                        <option value="op">opiekuna prawnego</option>
                    </select>&nbsp;
                    <input type="text" name="prosecutor_parent_name" placeholder="Imię i nazwisko" />
                </span>
                <span className="pesel">PESEL: <input type="text" name="prosecutor_parent_pesel" maxLength={11}/></span>
            </div>
            <span className="font-bold">Pozwany:</span>
            <div className="defendant flex flex-col ml-12">
                <span className="name"><input type="text" name="defendant_name" placeholder="Imię i nazwisko" /></span>
                <span className="adress">
                    <span>
                        <select name="defendant_address_type">
                            <option value="ul">ul.</option>
                            <option value="al">al.</option>
                        </select>&nbsp;
                        <input type="text" name="defendant_address_street" />
                    </span>,&nbsp;
                    <span>
                        <input type="text" name="defendant_address_kod" /> <input type="text" name="defendant_address_city" />
                    </span>
                </span>
            </div>
            <span className="wps font-bold">
                w.p.s <span ref={wps}>{0}</span> (12-krotność kwoty alimentów wskazanej w punkcie 1 pozwu)
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
                        zasądzenie od pozwanego <input type="text" name="lawsuit_1_defendant_name_and_surname" placeholder="Imię i nazwisko" />{" "}
                        na rzecz mał. powoda
                        <input type="text" name="lawsuit_1_prosecutor_name_and_surname" placeholder="Imię i nazwisko" />{" "}
                        urodzonego w dniu <input type="date" name="lawsuit_1_prosecutor_birth" /> r.
                        alimentów w kwocie <input type="number" name="lawsuit_1_alimony_date_end" onInput={handleChange} />{" "}
                        zł miesięcznie, płatnych z góry do rąk matki/ojca powoda
                        do dnia <input type="number" name="lawsuit_1_alimony_price" /> każdego
                        miesiąca, z ustawowymi odsetkami w razie opóźnienia w
                        płatności którejkolwiek z rat;
                    </li>
                    <li>
                        udzielenie zabezpieczenia roszczenia wskazanych w
                        punkcie 1 pozwu poprzez zasądzenie od pozwanego na rzecz
                        małoletniego powoda alimentów w kwocie{" "}
                        <input type="number" name="lawsuit_2_alimony_price" /> zł miesięcznie, płatnych
                        z góry do rąk matki/ojca powoda do dnia{" "}
                        <input type="number" name="lawsuit_2_alimony_date_end" /> każdego miesiąca, z
                        ustawowymi odsetkami w razie opóźnienia w płatności
                        którejkolwiek z rat - na czas trwania postępowania;
                    </li>
                    <li>
                        przeprowadzenie dowodu z dokumentów załączonych do
                        niniejszego pozwu, a mianowicie:{" "}
                        <input type="text" name="attachment_title" placeholder="Nazwa załącznika" />,
                        które następnie będą załączane do pozwu;
                    </li>
                    <li>
                        inne zobowiązania<br />
                        <textarea name="lwasuit_4_other_details"></textarea>
                    </li>
                    <li>
                        fakultatywnie: przeprowadzenie dowodu z zezn.{" "}
                        <input type="text" name="lawsuit_5_name_surname" placeholder="Imię i nazwisko i adres" /> na
                        fakt usprawiedliwionych potrzeb małoletniego powoda;
                        sytuacji matki powoda oraz możliwości zarobkowych
                        pozwanego;
                    </li>
                    <li>
                        przesłuchania stron na okoliczność{" "}
                        <input type="text" name="lawsuit_6_field" /> usprawiedliwionych potrzeb
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
                        <input type="text" name="justification_parent_1" /> i{" "}
                        <input type="text" name="justification_parent_2" /> urodził się{" "}
                        <input type="date" name="justification_birth_date" /> w{" "}
                        <input type="text" name="justification_birth_address" />
                    </span>
                    <span>
                        Dowód: <input type="file" name="proof" />
                    </span>
                    <span>
                        Powód zamieszkuje z <input type="text" name="prosecutor_living_with" placeholder="Imię i nazwisko" />
                    </span>
                    <span className="mt-4">
                        Koszty utrzymania domu obejmują:
                    </span>
                    <ul className="list-disc list-inside pl-3 mb-4">
                        <li>
                            opłatę za energię elektryczną - <input type="number" name="living_cost_electricity" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            opłatę za wodę i wywóz nieczystości <input type="number" name="living_cost_water_and_garbage" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            podatek - <input type="number" name="living_cost_taxes" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            gaz - <input type="number" name="living_cost_gas" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            koszty ogrzewania - <input type="number" name="living_cost_heating" min={0} />{" "} zł / miesiąc
                        </li>
                    </ul>
                    <span>Koszty utrzymania dziecka obejmują:</span>
                    <ul className="list-disc list-inside pl-3 mb-4">
                        <li>
                            wyżywienie - ok. <input type="number" name="livelihood_child_cost_food" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            kosmetyki i środki higieny - ok. <input type="number" name="livelihood_child_cost_cosmetics" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            odzież i buty - ok. <input type="number" name="livelihood_child_cost_clothes" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            leki i witaminy - ok. <input type="number" name="livelihood_child_cost_medicine" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            wizyty lekarskie - ok. <input type="number" name="livelihood_child_cost_doctors" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            zabawki, gry i książki edukacyjne - ok. <input type="number" name="livelihood_child_cost_games" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            wyjścia na basen, do kina - ok. <input type="number" name="livelihood_child_cost_leisure_activity" min={0} /> zł / miesiąc
                        </li>
                        <li>
                            wyjazdy wakacyjne - ok. <input type="number" name="livelihood_child_cost_holidays" min={0} />{" "} zł / miesiąc
                        </li>
                        <li>
                            inne wydatki - ok. <input type="number" name="livelihood_child_cost_other" min={0} /> zł / miesiąc
                        </li>
                    </ul>
                    <h3 className="font-bold">Inne niezbędne informacje:</h3>
                    <textarea name="other_needed_information"></textarea>
                    <span>
                        Mając na względzie powyższe, wnoszę jak na wstępie.
                    </span>
                    <input type="file" name="attachment" multiple />
                </div>
            </div>
            <input type="submit" value="Wyślij" />
        </form>
    );
}

export default Form;
