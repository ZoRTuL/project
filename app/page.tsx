import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export const metadata = {
  title: "Кондиціонери Шацьк, Світязь, Любомль — продаж та монтаж",
  description:
    "Продаж, монтаж і обслуговування кондиціонерів у Шацьку, Світязі, Любомлі та по Волинській області. Швидко, професійно, з гарантією.",
};

export default function Home() {


  return (
    <>
      <Header />
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-center px-6 pt-[140px]"
        style={{ backgroundImage: `url('/bg.jpg')` }}
        aria-label="Hero — кондиціонери"
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Зробіть свій дім комфортним <br /> цілий рік
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Продаж, монтаж та обслуговування кондиціонерів для дому та офісу.
            Ми працюємо надійно, швидко та професійно.
          </p>

          <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-xl text-lg shadow-lg transition">
            Зателефонувати
          </button>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


          <div className="">
            <h2 className="text-5xl font-bold mb-6">
              Про нас
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ми понад 5 років спеціалізуємося на продажу, монтажі та обслуговуванні кондиціонерів.
              Працюємо швидко, професійно та надаємо гарантію як на обладнання, так і на виконані роботи.
              Забезпечуємо комфорт у ваших приміщеннях у будь-яку пору року.
            </p>

          </div>


          <div className="flex justify-center">
            <img
              src="/bg2.jpg"
              alt="Про нас"
              className="rounded-2xl shadow-xl object-cover w-[300px] h-full"
            />


            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 opacity-20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>


      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Що ми пропонуємо
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src="/service.png" alt="Продаж кондиціонерів" className="w-20 h-20 mb-4" />
              <p className="text-gray-700 font-medium">
                Продаж кондиціонерів — сучасні моделі для дому та офісу, енергоефективні та тихі.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src="/worker.png" alt="Монтаж та установка" className="w-20 h-20 mb-4" />
              <p className="text-gray-700 font-medium">
                Монтаж та установка — професійна установка з гарантією якості.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src="/ac.png" alt="Обслуговування та чистка" className="w-20 h-20 mb-4" />
              <p className="text-gray-700 font-medium">
                Обслуговування та чистка — продовжуємо термін служби вашого кондиціонера та забезпечуємо максимальну ефективність.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src="/installation.png" alt="Ремонт та діагностика" className="w-20 h-20 mb-4" />
              <p className="text-gray-700 font-medium">
                Ремонт та діагностика — швидке усунення неполадок будь-якої складності.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Як ми працюємо
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
              <li>Ви залишаєте заявку або телефонуєте</li>
              <li>Ми підбираємо оптимальний кондиціонер</li>
              <li>Монтаж і налаштування в зручний для вас час</li>
              <li>Обслуговування та підтримка після встановлення</li>
            </ol>
          </div>

          <div className="flex justify-center">
            <img
              src="https://placehold.co/400x500"
              alt="Процес роботи"
              className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
            />
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">
            Населені пункти, де ми працюємо
          </h3>

          <p className="text-gray-700 text-lg">
            Шацьк, Світязь, Любомль, Шацькі озера та прилеглі населені пункти Волинської області.
            Якщо вашого міста немає у списку — зателефонуйте, ми обов’язково підкажемо можливість виїзду.
          </p>
        </div>
      </div>


      <Contact />

      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Кондиціонери у Шацьку, Світязі та Любомлі
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Ми надаємо повний комплекс послуг з продажу, монтажу та обслуговування
            кондиціонерів у Шацьку, Світязі, Любомлі та прилеглих населених пунктах
            Волинської області. Працюємо як з приватними будинками та квартирами,
            так і з готелями, базами відпочинку, апартаментами та офісами.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Особливу увагу приділяємо курортним зонам, таким як Світязь та Шацькі озера,
            де кондиціонер є важливою складовою комфортного відпочинку в літній сезон.
            Ми допоможемо підібрати оптимальну модель кондиціонера, виконаємо професійний
            монтаж та забезпечимо подальше сервісне обслуговування.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Якщо ви знаходитесь у Шацьку, Світязі, Любомлі або поруч — зв’яжіться з нами.
            Ми швидко приїдемо на об’єкт, проконсультуємо та виконаємо всі роботи «під ключ».
          </p>
        </div>
      </div>


      <Footer />
    </>
  );
}
