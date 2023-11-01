import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

// Elements
import LatestNewsSection from '../elements/latest-news-slider'

// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'

class Faq extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: 'url(' + bnrImg1 + ')' }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Faq's</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{' '}
                          Ana səhifə
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Faq's
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>

          <section className="section-sp3">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
              <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Usm sağlamlığa ziyandırmı?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                      Ultrasəs müayinə(USM) səs dalğaları vasitəsilə daxili orqanlara baxmaq və müayinə etmək üsuludur.Praktiki cəhətdən zərərsizdir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
      
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Usm ilə hansı orqanların müayinəsi mümkündür?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                    USM vasitəsilə qarın boşluğu(qaraciyər, öd kisəsi, mədəaltı vəz, dalaq), böyrəklər, sidik kisəsi, prostat vəz, ginekoloji, qalxanvari vəz ,süd vəziləri, yumşaq toxuma,limfa düyünləri,skrotal  və s. müayinələr aparılır.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Hamiləliyin doppler müayinəsi neçənci həftədə
                          olunmalıdır?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                    Doppler müayinəsi qan dövranını yoxlamaq məqsədi ilə aparılır.
Hamiləliyin Doppler müayinəsi 22-24 həftədən sonra məsləhət görülür
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Uşağın cinsiyyəti hamiləliyin neçənci həftəsindən
                          etibarən bilinir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                       Cinsiyyət 11-14 həftə arası formalaşır.1% hallarda  uşağın cinsiyyəti 17 həftədə formalaşır.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                             <Accordion.Item eventKey="4">
                        <Accordion.Header>
                        Terapevtə nə vaxt müraciət olunur?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Əgər səhhətinizlə əlaqədar hər hansı bir şikayət əmələ gəlibsə,
hansı mütəxəssisə müraciət etməli olduğunuza əmin deyilsinizsə,
müstəqil analiz vermisinizsə və nəticələri şəhr etmək lazımdırsa,
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                        Terapevtin qəbulunda nə baş verir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Terapevt pasientin müraciət etməli olduğu ilk həkimdir. O, pasientin şikayətlərini dinləyir,

<li>anamnez toplamalı (xəstəliyin tarixi, pasientin həyat tərzi, irsiyyəti, kecirdiyi xəstəliklər, allergik reaksiyaların olması) yani məlumat toplamalıdır.</li>
<li>Baxış keçirir (pasientin halını qiymətləndirir, dəri örtükləri və selikli qişalarını nəzərdən keçirir, nəbz və arterial təzyiqi ölçür, ürəyə və ağ ciyərlərə qulaq asır, qarını əlləyir)</li>
<li>Lazım gəldikdə əlavə müayinələr (laborator, rentgenoloji, sonoqrafik, endoskopik, elektrofizioloji və s ) təyin edir</li>
<li>Nəticədə diaqnozu müəyyənləşdirərək müalicə təyin edir və lazımi tibbi sənədləşmə aparır.</li>


                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          Aknenin simptomları nələrdir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Akne zamanı üz, sinə və kürəkdə müxtəlif morfoloji
                            elementlər yaranır. Sızanaqların kökündə iltihabi
                            proses olur. Nəticədə yumşaq toxumalar əriyir və
                            irinli ifrazat yaranır. Pustulalar açılır, irinli
                            ifrazat bayıra çıxır və üzəri qartmaqla örtülür.
                            Sızanaqlar epidermis qatında olduqda yerində piqment
                            ləkəsi, derma qatında olduqda isə çapıq əmələ gəlir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          Mezoterapiya nədir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Mezoterapiya – dəri içinə və dərialtına müxtəlif
                            preparatların və kokteyllərin yeridilməsinə
                            əsaslanan müalicə üsuludur. Mezoterapiya dərinin
                            cavanlaşdırılması və sellülitin müalicəsi
                            istiqamətində ən effektiv üsullardandı. Bu müalicə
                            metodunun əsasını hüceyrələrə birbaşa təsir
                            mexanizmi təşkil edir. Buna preparatların və
                            kokteyllərin birbaşa müvafiq nahiyəyə inyeksion
                            üsulla yeritməklə nail olurlar. Bu zaman lazımi
                            qidalı maddələr, mikroelementlər, vitaminlər və
                            dərman preparatları dərhal istədiyimiz yerə çatır.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-lg-6">
                   <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Hamiləlik boyunca hər ay neçə kq kökəlmək olar?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Hamiləlikdə çəki artımının izlənməsi çox
                            əhəmiyyətlidir. İdeal kilosunda olan bir ana
                            namizədi üçün ilk üç ay müddətində hər ayda 0.5-1
                            kilo, sonrakı aylarda isə 1.5-2 kilo çəki artımı
                            normaldır. Hamiləlikdə nə qədər kilo alabiləcəyiniz
                            öncəki çəkinizdən çox asılıdır. Lakin bu proses tam
                            olaraq belə getmir. Çəkinizindən asılı olmayaraq siz
                            gündəlik özünüzün və körpənizin ehtiyyacı olan
                            zülal, vitamin bir sözlə dəyərli qidaları mütləq
                            qəbul etməlisiniz. Çəkiniz ləng artırsa bu o
                            deməkdir ki, körpəniz sağlam qida ilə tam təmin
                            olunmur. Hamiləlikdə sürətli çəki artımı diabet,
                            uşağın ağır çəkili olması, venaların varikoz
                            genişlənməsinəsəbəb ola bilər
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Ürək bulanma və qusma məni çox narahat edir, bundan
                          necə xilas ola bilərəm?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            İlk öncə bilməlisiniz ki, ürək bulanma, qusma, ağız
                            şirəsi ifrazının artması, şişkinliklər, dəri
                            problemləri və digər bu kimi toksikozlar hamiləlik
                            sonlandıqdan sonra keçib gedən patoloji haldan başqa
                            birşey deyil. Səhərlər yavaş-yavaş qalxın və bir az
                            tez-tez nəfəs alın, yataqdan durmadan nahar etməyi
                            sınayın, arabir quru meyvə,nanə, limon və zəncəfil
                            yeyin, acı yeməklər uzaq olun və fizki aktiv olun.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Mioma (Fibroid) Nədir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Fibroidlər hamar, xərçəngsiz şişlərdir və uşaqlıq
                            yolunda və ya onun ətrafında inkişaf edə bilər.
                            Qismən əzələ toxumasından ibarət olan miomlar nadir
                            hallarda serviksdə əmələ gəlir, lakin onlar inkişaf
                            etdikdə, adətən, uşaqlığın yuxarı hissəsinin böyük
                            hissəsində də rast gəlinir. (i) Uterusun bu
                            hissəsindəki fibromalara fibroma və ya leyomioma da
                            deyilir. Həkimlər pelvik müayinə zamanı əksər
                            fibromaları görə və ya hiss edə bilərlər.
                            Simptomlara səbəb olanlar cərrahi yolla və ya daha
                            az invaziv prosedurlarla aradan qaldırıla bilər.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                             <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Hormonal analizlər necə verilməlidir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Hormon müayinələri üçün qan nümunələri səhər
                            saatlarında acqarına götürülməlidir. Qan nümunəsinin
                            götürülməsindən öncə fiziki və emosional gərginlik,
                            fizioterapevtik prosedurlar, dərman preparatları (bu
                            halda dərman qəbulunun dayandırılması qərarı müalicə
                            həkimi tərəfindən qəbul edilir), spirtli içki və
                            yağlı qida qəbulu yolverilməzdir Qadınlardan qan
                            nümunələri müalicə həkiminin xüsusi göstərişləri
                            olmadığı halda menstrual tsiklin müəyyən günlərində
                            götürülür: LH, FSH, Estradiol hormonları tsiklin
                            2-5-ci günlərində Progesteron 19-24-cü günlərində 17
                            OH progesteron 4-5 ci günlərində götürülməsi
                            məqsədəuyğundur. Prolaktin analizinin yuxudan 2 saat
                            sonra verilməsi tövsiyyə olunur Kortizol analizi
                            üçün saat 10:00 a kimi yaxınlaşmaq lazımdır
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Sutkalıq sidik necə toplanmalıdır?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Sidik 24 saat ərzində sterilizasıya olunmuş balona
                            yığılır. Səhər ilkin sidik atılır, vaxt qeyd olunur,
                            24 saat ərzində ifraz olunan bütün sidik toplanılır.
                            Ümumi miqdarı nəzərdən keçirilərək qeyd edilir. Ən
                            az 20ml olmaqla birdəfəlik steril konteyner əlavə
                            olunur 2 saat ərzində klinikaya çatdırılır.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          Hamiləliyin təyini üçün hansı analizləri verməyiləm?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Müasir tibbin təklif etdiyi hamiləliyin
                            müəyyənləşdirilməsinin ən etibarlı yolu qanda
                            β-xorionik qonadotropin hormonunun müayinəsidir.
                            Dölün uşaqlığın divarlarına sabitləndiyi zaman
                            istehsal olunan hormondur və hamiləliyin 4-cü
                            günündən etibarən aşkar olunur.{' '}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          Urogenital nahiyədən götürülən yaxma analizinin
                          şərtləri nələrdir?{' '}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Qadınlarda: <br />
                            Cinsi pəhriz - 2 gün Son sidik <br />
                            ifrazından 3 saat keçdikdən sonra <br />
                            Kolposkopiya(Vaginal USM )müayinəsindən əvvəl və ya
                            24 saat sonra <br /> Vaginal şam qəbulundan 3 gün
                            sonra <br />
                            Adəti qanaxmadan 2 gün əvvəl və ya bittikdən 3 gün
                            sonra.
                            <br /> Antibiotik tərkibli dərmanların qəbulundan 14
                            gün keçməlidir. Müayinə götürüləcəyi günü dərindən
                            yuyunmaq olmaz. ( ilıq su ilə yuyunma mümkündür).{' '}
                            <br />
                            Qızlarda (virgo) yaxma analizi vaginadan götürülür.{' '}
                            <br /> <br />
                            Bəylər üçün şərtlər: <br /> Müayinə götürüləcəyi gün
                            sidiyə çıxılmamalı və ya son sidik ifrazından 4-5
                            saat sonra Antibiotik tərkibli dərmanların
                            qəbulundan 14 gün keçməlidir
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey='11'>
                        <Accordion.Header>
                          Qanın kliniki analizinə hansı göstəricilər daxildir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Qanın ümumi analizinə eritrositlər, hemoqlobin,
                            leykositlər, rəng göstəriciləri, hematokrit,
                            retikulositlər, trombositlər aiddir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
        
                    </Accordion>
                </div>
              </div>
            </div>
          </section>

          {/* <LatestNewsSection /> */}
        </div>
      </>
    )
  }
}

export default Faq
