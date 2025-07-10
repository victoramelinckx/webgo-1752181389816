
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas." subheadline="Transforma tu negocio con nuestra web y soporte 24/7, sin complicaciones." cta1="Empieza Ahora" />
<How step1Title="Contacta a WebGo" step1Desc="Dinos sobre tu negocio y metas." step2Title="Creamos Tu Web" step2Desc="Desarrollamos tu sitio en 24 horas." step3Title="Ventas Online" step3Desc="Comienza a vender con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza tus Ventas" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Completa" beneficio1="Nos encargamos de todo por ti" beneficiotitulo2="Ventas Aumentadas" beneficio2="Convierte recomendaciones en ingresos constantes" />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="Transformamos recomendaciones en ventas online con sitios listos y gestionados." services={[{"name":"Desarrollo Rápido de Web","icon":"speedometer","description":"Webs listas en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Ayuda continua todo el día."},{"name":"SEO Avanzado","icon":"search","description":"Optimización para Google con WebGo."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido actualizado sin esfuerzo."},{"name":"Integración de E-commerce","icon":"shopping-cart","description":"Vende online fácilmente."},{"name":"Campañas de Publicidad","icon":"bullhorn","description":"Atrae clientes potenciales."}]} />
<BeforeAndAfter subheadline="Transformamos visiones digitales en realidades asombrosas y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender más allá de las recomendaciones de boca en boca?","respuesta":"WebGo te ayuda a digitalizar tus ventas creando una tienda online que llegará a más clientes. Así, no dependerás solo de recomendaciones y podrás aumentar tus ingresos."},{"pregunta":"¿Qué servicios ofrece WebGo para quienes no tienen tiempo de gestionar un sitio web?","respuesta":"Ofrecemos un servicio completo de diseño y gestión web. Nos encargamos de todo para que tú puedas concentrarte en dirigir tu negocio, sin preocuparte por el sitio web."},{"pregunta":"¿Cuáles son los beneficios de tener una tienda online con WebGo?","respuesta":"Con WebGo, tu tienda online estará optimizada para atraer más clientes y aumentar tus ventas. Además, nuestro equipo se encarga del mantenimiento, asegurando que siempre esté funcionando de manera óptima."},{"pregunta":"¿Qué tan fácil es empezar a vender online si nunca lo he hecho antes?","respuesta":"Es muy fácil. WebGo se encarga de todo el proceso de digitalización. Creamos y gestionamos tu tienda online para que puedas empezar a vender sin complicaciones, incluso si eres nuevo en el mundo digital."},{"pregunta":"¿Cómo puede WebGo ayudarme si no sé cómo generar ventas online?","respuesta":"WebGo te guía en cada paso, desde la creación de tu tienda online hasta estrategias para atraer clientes. Te ayudamos a entender y aplicar técnicas efectivas de marketing digital para aumentar tus ventas."}]} />
<BookAppointment 
                      heading="Dale Un Salto Digital a Tu Negocio" 
                      description="Transforma recomendaciones en ventas online con WebGo. Deja que los expertos optimicen tu presencia digital mientras tú te enfocas en crecer."
                      formPostUrl="api/contact-us"
                      projectId="ol8oZ0kdNye7DOcmDuppsY5zs7D3"
                    />
<Footer />
    </main>
  );
}
