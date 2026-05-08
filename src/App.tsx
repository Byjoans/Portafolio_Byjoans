/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { Mail, ArrowRight, Menu, X, Linkedin, Play, CheckCircle2, Cpu, Layout, Video, PenTool, Layers, ExternalLink, Users, Zap, MessageSquare, Info, GraduationCap, Briefcase, Wrench, Mountain, Trophy, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ParallaxElement = ({ children, speed = 0.5, className = "" }: { children: React.ReactNode, speed?: number, className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Enfoque", href: "#enfoque" },
    { name: "Casos de Éxito", href: "#proyectos" },
    { name: "Habilidades", href: "#skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-sm font-bold tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-black text-[10px]">JM</div>
          JOAN S. MOSQUERA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-400 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-black rounded-full px-5 text-[11px] font-bold">
              CONTACTAR
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
          {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-white/5 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-400"
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto" onClick={() => setIsOpen(false)}>
            <Button className="bg-accent hover:bg-accent/90 text-black rounded-full w-full">CONTACTAR</Button>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const ProfileModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  React.useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-neutral-900/90 border border-white/10 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
          >
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Info size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">Información Académica y Profesional</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <GraduationCap size={16} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Programa</span>
                  </div>
                  <p className="text-white font-medium">Comunicación Social y Periodismo</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-violet">
                    <Briefcase size={16} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Universidad</span>
                  </div>
                  <p className="text-white font-medium">Universidad Autónoma de Occidente</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Layers size={16} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Semestre</span>
                  </div>
                  <p className="text-white font-medium">Décimo semestre</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">Descripción Detallada</h3>
                <p className="text-gray-300 leading-relaxed text-lg italic whitespace-pre-line">
                  "Comunicador social de la Universidad Autónoma de Occidente, con énfasis en el ámbito organizacional enfocado en la adopción digital. Aunque mi pasión y formación nacen en la producción audiovisual y sonora, he escalado mi perfil hacia la comunicación estratégica organizacional. 

Hoy, conecto el lenguaje audiovisual con la transformación digital de las empresas. Me destaco por mi excelente desempeño en edición, mi capacidad para liderar equipos multidisciplinarios y mi habilidad para traducir procesos complejos en narrativas que generan valor y facilitan el trabajo en equipo."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  // Generate random particles for the background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-20 md:pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center"
    >
      {/* Interactive Mouse Follower Glow */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        animate={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 255, 0.08), transparent 80%)`
        }}
      />

      {/* Floating Particles Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent/20 blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Immersive Background Atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://res.cloudinary.com/drjy92ddg/image/upload/v1775747466/Dise%C3%B1o_sin_t%C3%ADtulo_4_s7tytp.png')] bg-cover bg-center blur-[120px] scale-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-left relative z-30 pointer-events-none"
          >
            <div className="pointer-events-auto">
              <Badge variant="outline" className="mb-6 border-accent/30 text-accent bg-accent/5 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Especialista en Adopción Digital y Producto
              </Badge>
              <h1 className="text-4xl md:text-6xl xl:text-8xl font-extrabold tracking-tighter leading-[1] mb-8 text-gradient pb-4">
                Joan S. Mosquera <br />
                <span className="text-white/60 text-2xl md:text-4xl xl:text-5xl block mt-4">
                  Comunicador Social <br /> Organizacional
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
                Traduzco la complejidad técnica en experiencias digitales de alto impacto que garantizan la adopción del software.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#proyectos" className="pointer-events-auto">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-black rounded-full px-10 font-bold shadow-[0_0_30px_rgba(0,245,255,0.4)]">
                    VER PROYECTOS
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setIsModalOpen(true)}
                  className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 font-bold flex items-center gap-2 pointer-events-auto"
                >
                  <Info size={18} /> MÁS SOBRE MÍ
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Profile Modal */}
          <ProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Large, Overlapping Circular Image with Dark Filter */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(40px)", scale: 1.1, y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.8, ease: "easeOut" }}
            className="lg:col-span-8 lg:absolute lg:-right-32 lg:top-1/2 lg:-translate-y-1/2 z-10 mt-4 lg:mt-0 p-0 md:p-12"
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-square w-[110%] -left-[5%] md:w-full md:left-0">
                <img 
                  src="https://res.cloudinary.com/drjy92ddg/image/upload/v1775747466/Dise%C3%B1o_sin_t%C3%ADtulo_4_s7tytp.png" 
                  alt="Joan S. Mosquera Illustration" 
                  className="w-full h-full object-cover rounded-full border-4 md:border-[12px] border-white/5 shadow-[0_0_100px_rgba(0,245,255,0.2)] brightness-[0.8] contrast-[1.1] saturate-[0.9]"
                  style={{ 
                    maskImage: "radial-gradient(circle at center, black 70%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 70%, transparent 100%)"
                  }}
                  referrerPolicy="no-referrer"
                />
                {/* Orbital Glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-violet/10 blur-[150px] -z-10 rounded-full opacity-40 animate-pulse" />
                <div className="absolute -inset-4 border border-accent/10 rounded-full -z-10 animate-[spin_25s_linear_infinite]" />
                <div className="absolute -inset-10 border border-violet/5 rounded-full -z-10 animate-[spin_35s_linear_infinite_reverse]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VideoPitch = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <div className="w-full h-full scale-[0.8] md:scale-90 lg:scale-85 transition-transform duration-1000">
        <LimitedVideoPlayer 
          videoUrl="https://youtu.be/O506um4DGMY" 
          limitPercentage={1}
          disableLimit={true}
          allowControls={true}
          className="h-full w-full rounded-[3rem]"
        />
      </div>
      
      {/* Dynamic Overlay Text */}
      // <div className="absolute inset-x-0 top-0 h-1/3 z-10 pointer-events-none bg-gradient-to-b from-black/60 to-transparent" />
      
      <div className="absolute top-12 left-12 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-accent text-black border-none px-4 py-1.5 rounded-full font-black tracking-widest mb-4">VIDEO PITCH</Badge>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Mi propuesta <br /> de valor</h3>
        </motion.div>
      </div>
    </div>
  );
};

const Focus = () => {
  return (
    <section id="enfoque" className="relative py-40 px-6 bg-gradient-to-b from-transparent via-background to-background overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] text-accent mb-8 uppercase">MI ENFOQUE</h2>
          <blockquote className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight text-white mb-12">
            "El código perfecto no sirve si la gente no lo entiende. <br /> Mi trabajo es eliminar la fricción entre la tecnología y las personas."
          </blockquote>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Combino redacción estratégica (UX Writing), diseño de interfaces intuitivas y creación de contenido audiovisual para asegurar que cada herramienta digital sea una extensión natural del trabajo diario.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const cards = [
    {
      title: "Vínculo y Equipo de Trabajo",
      text: "Me integré a la Célula de Innovación como el puente comunicativo entre ingenieros y usuarios finales, trabajando bajo metodologías ágiles.",
      icon: <Users className="w-5 h-5 text-accent" />,
      border: "border-accent/20"
    },
    {
      title: "Funciones Desempeñadas",
      bullets: [
        { label: "Comunicación TIC", text: "Traducción de procesos complejos." },
        { label: "Auditoría UX/UI", text: "Mejora de interfaces digitales." },
        { label: "Producción Audiovisual", text: "Material para adopción tecnológica." }
      ],
      icon: <Wrench className="w-5 h-5 text-violet" />,
      border: "border-violet/20"
    },
    {
      title: "Retos Asumidos",
      text: "Comprender arquitecturas técnicas para explicarlas de forma sencilla y alinear la comunicación con estándares de innovación de la ANDI.",
      icon: <Mountain className="w-5 h-5 text-accent" />,
      border: "border-accent/20"
    },
    {
      title: "Aprendizajes y Logros",
      text: "Dominio de metodologías ágiles y herramientas de diseño UX. Estandarización de presentaciones de software, reduciendo la fricción operativa.",
      icon: <Trophy className="w-5 h-5 text-violet" />,
      border: "border-violet/20"
    }
  ];

  return (
    <section id="experiencia" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.4em] text-violet mb-4 uppercase">EXPERIENCIA Y RETOS</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
            Mi Rol en la Célula de Innovación
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`bg-neutral-900/50 backdrop-blur-sm border-2 ${card.border} hover:bg-neutral-900/80 transition-all duration-500 h-full group`}>
                <CardContent className="p-8 space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-white leading-tight">{card.title}</h4>
                  
                  {card.bullets ? (
                    <ul className="space-y-3">
                      {card.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="w-1 h-1 rounded-full bg-violet mt-2 flex-shrink-0" />
                          <p className="text-gray-400 text-xs leading-relaxed">
                            <span className="text-white font-semibold">{bullet.label}:</span> {bullet.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {card.text}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageCarousel = ({ images, onImageClick }: { images: string[], onImageClick: (src: string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div 
        className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black/20 cursor-zoom-in" 
        onClick={() => onImageClick(images[currentIndex])}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Manifesto Visual ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <div className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20">
            <ExternalLink className="text-white" size={20} />
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-2 md:-left-10 flex items-center">
            <button
              onClick={handlePrev}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-all z-30 shadow-xl"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 md:-right-10 flex items-center">
            <button
              onClick={handleNext}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-all z-30 shadow-xl"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/10 hover:bg-white/20'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Manifesto = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const manifestoImages = [
    "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749981/signal-2026-03-18-091153_002_uor2yp.jpg",
    "https://res.cloudinary.com/drjy92ddg/image/upload/v1776704639/IMG_20260109_154951_b4rkra.jpg",
    "https://res.cloudinary.com/drjy92ddg/image/upload/v1776704673/signal-2026-03-18-091153_003_axhf2p.jpg"
  ];

  const fullText = "Como único perfil de humanidades en la Célula de Innovación, asumí el liderazgo como una postura y no como un cargo. Comprendí que mi rol no era competir con el conocimiento técnico, sino complementarlo siendo la voz del usuario final en la planificación de software. Fui más allá de las tareas asignadas impulsando iniciativas estratégicas, como la plataforma 'NOVA' y formatos de microlearning, liderando así un cambio cultural que demostró que la comunicación es el verdadero motor para que la tecnología se adopte y funcione con éxito.";
  const summarizedText = "Como único perfil de humanidades en la Célula de Innovación, lideré desde la comunicación estratégica para humanizar la tecnología. Mi rol fue ser la voz del usuario final, impulsando iniciativas como 'NOVA'...";

  // Scroll lock when lightbox is open
  useEffect(() => {
    if (fullscreenImage) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [fullscreenImage]);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <ImageLightbox 
        src={fullscreenImage} 
        isOpen={!!fullscreenImage} 
        onClose={() => setFullscreenImage(null)} 
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-6 md:p-16 rounded-3xl md:rounded-[2.5rem] bg-white/5 backdrop-blur-md border-l-4 border-accent"
        >
          <div className="space-y-8 text-center">
            <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5 px-6 py-2 rounded-full text-sm font-bold tracking-[0.4em] uppercase">
              MANIFIESTO DE LIDERAZGO
            </Badge>

            <ImageCarousel images={manifestoImages} onImageClick={setFullscreenImage} />
            
            <motion.p 
              layout
              className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight italic"
            >
              {isExpanded ? fullText : summarizedText}
            </motion.p>

            <Button 
              variant="ghost" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-accent hover:text-accent hover:bg-accent/10 rounded-full px-8 font-bold tracking-widest text-[10px] uppercase"
            >
              {isExpanded ? "Leer menos" : "Leer manifiesto completo"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LimitedVideoPlayer = ({ 
  videoUrl, 
  limitPercentage = 0.4, 
  className = "aspect-video rounded-2xl border border-white/10",
  allowControls = false,
  disableLimit = false
}: { 
  videoUrl: string, 
  limitPercentage?: number, 
  className?: string,
  allowControls?: boolean,
  disableLimit?: boolean
}) => {
  const [isLimited, setIsLimited] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const durationRef = useRef<number>(0);

  const getVideoId = (url: string) => {
    if (url.includes('embed/')) return url.split('embed/')[1].split('?')[0];
    if (url.includes('v=')) return url.split('v=')[1]?.split('&')[0];
    return url.split('/').pop()?.split('?')[0] ?? '';
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=${allowControls ? 1 : 0}&modestbranding=1&rel=0&iv_load_policy=3&disablekb=${allowControls ? 0 : 1}&fs=${allowControls ? 1 : 0}`;

  const sendCommand = (func: string, args?: any[]) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: args ?? [] }),
      '*'
    );
  };

  useEffect(() => {
    // Si tiene controles nativos y sin límite, no necesitamos escuchar nada
    if (allowControls && disableLimit) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'infoDelivery' && data.info) {
          if (data.info.duration && !durationRef.current) {
            durationRef.current = data.info.duration;
          }
          if (data.info.playerState === 1) {
            setIsPlaying(true);
            setHasInteracted(true);
          }
          if (data.info.playerState === 2 || data.info.playerState === 0) {
            setIsPlaying(false);
          }
          if (data.info.currentTime && durationRef.current && !disableLimit) {
            const limit = durationRef.current * limitPercentage;
            if (data.info.currentTime >= limit) {
              sendCommand('pauseVideo');
              setIsLimited(true);
              setIsPlaying(false);
              if (intervalRef.current) clearInterval(intervalRef.current);
            }
          }
        }
      } catch {}
    };

    window.addEventListener('message', handleMessage);
    intervalRef.current = setInterval(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening' }), '*'
      );
    }, 500);

    return () => {
      window.removeEventListener('message', handleMessage);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [limitPercentage, allowControls, disableLimit]);

  const togglePlay = () => {
    if (isLimited || allowControls) return;
    if (isPlaying) {
      sendCommand('pauseVideo');
    } else {
      sendCommand('playVideo');
    }
  };

  const handleRestart = () => {
    setIsLimited(false);
    setHasInteracted(false);
    durationRef.current = 0;
    sendCommand('seekTo', [0, true]);
  };

  return (
    <div className={`relative ${className} overflow-hidden shadow-2xl bg-black group`}>
      <iframe
        ref={iframeRef}
        src={embedUrl}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full aspect-video scale-[1.3] md:scale-110 lg:scale-100"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Video del proyecto"
      />

      {/* Solo mostrar overlays si NO tiene controles nativos */}
      {!allowControls && (
        <>
          {/* FASE 1: botón decorativo, clic pasa al iframe */}
          {!hasInteracted && !isLimited && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center text-black shadow-[0_0_40px_rgba(0,245,255,0.4)] pointer-events-none"
              >
                <Play size={32} fill="currentColor" className="ml-1" />
              </motion.div>
            </div>
          )}

          {/* FASE 2: capa activa que intercepta clics */}
          {hasInteracted && !isLimited && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
            >
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center text-black shadow-[0_0_40px_rgba(0,245,255,0.4)]"
                  >
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                  {isPlaying
                    ? <span className="flex gap-[3px]"><span className="w-[3px] h-3 bg-white rounded-sm"/><span className="w-[3px] h-3 bg-white rounded-sm"/></span>
                    : <Play size={12} fill="white" className="ml-0.5" />
                  }
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  {isPlaying ? 'Reproduciendo' : 'Pausado'}
                </span>
              </div>
            </div>
          )}

          {/* Vista previa limitada */}
          <AnimatePresence>
            {isLimited && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center z-20"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/30">
                  <Info className="text-accent" size={40} />
                </div>
                <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tighter">Vista Previa Limitada</h4>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                  Por políticas de <span className="text-accent font-bold">confidencialidad empresarial</span>, el acceso está restringido al 40% de la duración total.
                </p>
                <Button
                  variant="outline"
                  onClick={handleRestart}
                  className="mt-8 border-accent/30 text-accent hover:bg-accent/10 rounded-full px-8 text-[10px] font-bold tracking-widest uppercase"
                >
                  Reiniciar Vista Previa
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

const VideoCarousel = ({ urls, limitPercentage }: { urls: string[], limitPercentage: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % urls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + urls.length) % urls.length);
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <LimitedVideoPlayer videoUrl={urls[currentIndex]} limitPercentage={limitPercentage} />
          </motion.div>
        </AnimatePresence>
      </div>

      {urls.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-2 md:-left-12 flex items-center">
            <button
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-all z-30 shadow-xl"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 md:-right-12 flex items-center">
            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-black transition-all z-30 shadow-xl"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {urls.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-10 bg-accent' : 'w-2 bg-white/10 hover:bg-white/20'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const LimitedPDFViewer = ({ pages, maxPages = 5, onImageClick }: { pages: string[], maxPages?: number, onImageClick?: (src: string) => void }) => {
  const visiblePages = pages.slice(0, maxPages);
  
  return (
    <div className="space-y-6">
      <div className="relative max-h-[700px] overflow-y-auto rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl custom-scrollbar group">
        {/* Anti-download overlay (detects right click/drag) */}
        <div className="absolute inset-0 z-10 pointer-events-none selective-overlay" />
        
        <div className={`p-4 md:p-8 space-y-8 select-none ${onImageClick ? 'cursor-zoom-in' : 'pointer-events-none'}`}>
          {visiblePages.map((page, i) => (
            <div key={i} className="relative group/page" onClick={() => onImageClick?.(page)}>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white/50 border border-white/5 z-20">
                PÁGINA {i + 1}
              </div>
              <img 
                src={page} 
                alt={`Página ${i + 1}`} 
                className="w-full h-auto rounded-lg shadow-lg border border-white/5 transition-transform duration-500 group-hover/page:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/page:opacity-100 transition-opacity bg-black/5">
                <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Block */}
        <div className="sticky bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/95 to-transparent pt-32 pb-12 px-8 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto border border-accent/20 mb-4">
              <Info className="text-accent" size={24} />
            </div>
            <h4 className="text-xl font-bold text-white uppercase tracking-tight">Acceso Limitado</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Por políticas de <span className="text-accent font-bold">confidencialidad técnica</span>, solo se permite la visualización de las primeras {maxPages} páginas de este informe.
            </p>
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase pt-4">
              Documento Protegido • No descargable
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          MODO PREVISUALIZACIÓN SEGURA
        </div>
        <div>
          MOSTRANDO {maxPages} DE {pages.length} PÁGINAS
        </div>
      </div>
    </div>
  );
};

const ImageLightbox = ({ src, isOpen, onClose }: { src: string | null, isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    if (isOpen && src) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen, src]);

  return (
    <AnimatePresence>
      {isOpen && src && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-full max-h-full z-10"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={src}
              alt="Full view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <ImageLightbox 
            src={fullscreenImage} 
            isOpen={!!fullscreenImage} 
            onClose={() => setFullscreenImage(null)} 
          />
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="absolute top-6 right-6 z-20">
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden cursor-zoom-in group/mainimg" onClick={() => setFullscreenImage(project.image)}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/mainimg:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mainimg:opacity-100 transition-opacity">
                  <div className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <Badge variant="outline" className={`${project.accent} border-current/30 bg-current/5 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4`}>
                    {project.title}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase">{project.subtitle}</h2>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-10">
                {(project.videoUrl || (project.videoUrls && project.videoUrls.length > 0)) && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                      {project.videoUrls && project.videoUrls.length > 1 ? "Videos del Proyecto" : "Video del Proyecto"}
                    </h3>
                    <VideoCarousel 
                      urls={project.videoUrls || [project.videoUrl]} 
                      limitPercentage={0.4} 
                    />
                  </div>
                )}

                {project.pdfPages && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Previsualización del Informe</h3>
                    <LimitedPDFViewer pages={project.pdfPages} maxPages={5} onImageClick={setFullscreenImage} />
                  </div>
                )}

                {project.gallery && project.gallery.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Galería del Proyecto</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.gallery.map((img: string, i: number) => (
                        <div 
                          key={i} 
                          className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in group/gallery"
                          onClick={() => setFullscreenImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} gallery ${i}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity bg-black/20">
                            <ExternalLink className="text-white" size={20} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Sobre el Proyecto</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-accent font-bold text-xs tracking-widest uppercase">Mi Rol</p>
                      <p className="text-white font-medium">{project.role}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-violet font-bold text-xs tracking-widest uppercase">Impacto</p>
                      <p className="text-white font-medium">{project.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6">Alcance y Ejecución</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.details.map((detail: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "conocimientos",
      title: "Nuevos conocimientos",
      subtitle: "CHANCE BINGO",
      role: "Diseño UX/UI y Animación 3D (Blender).",
      description: "Participé en el ciclo completo de desarrollo de la plataforma Chance Bingo, creando material visual de alto impacto.",
      longDescription: "Como uno de mis primeros retos en la Célula de innovación, participé en el ciclo completo de desarrollo de la plataforma Chance Bingo. Mi enfoque principal fue la ideación de la experiencia visual (UX/UI) y el acompañamiento del equipo técnico. Para garantizar un producto final atractivo, asumí el desafío de dominar herramientas de animación 3D (Blender) en tiempo récord, creando material de apoyo visual de alto impacto que facilitó la comprensión y adopción del juego por parte del consumidor final.",
      impact: "Facilitó la comprensión y adopción del juego por parte del consumidor final mediante visuales 3D.",
      details: [
        "Ideación de experiencia visual (UX/UI).",
        "Modelado y animación 3D en Blender.",
        "Acompañamiento al equipo de desarrollo técnico.",
        "Creación de activos visuales para marketing."
      ],
      image: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775770264/Dise%C3%B1o_sin_t%C3%ADtulo_vth2g4.png",
      videoUrls: [
        "https://youtu.be/6Xsn5kNhl6I",
        "https://www.youtube.com/watch?v=Ckz-9dqH9FM"
      ],
      gallery: [
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749998/image_1_gpufzl.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749997/image_y2bajx.png"
      ],
      color: "border-accent/30",
      accent: "text-accent"
    },
    {
      id: "planificacion",
      title: "Ideación y planificación",
      subtitle: "NOVA",
      role: "Estratega de Producto y Comunicación.",
      description: "Innovación para conectar la tecnología brillante con el usuario final de forma humana.",
      longDescription: "Históricamente, los departamentos de tecnología desarrollan herramientas brillantes, pero se enfrentan a un muro: la adopción y la visibilidad. El problema en Redcolsa era evidente; la innovación técnica estaba desconectada del usuario final. Las plataformas se percibían frías, los manuales eran demasiado técnicos y el impacto real de TIC en la cultura de la empresa era invisible. Mi misión consistió en innovar para aportar valor estratégico al departamento de TIC.",
      impact: "Visibilización del impacto real de TIC en la cultura organizacional.",
      details: [
        "Diagnóstico de brechas de adopción tecnológica.",
        "Rediseño de la narrativa de productos internos.",
        "Planificación estratégica de lanzamientos de software.",
        "Humanización de manuales y guías técnicas."
      ],
      image: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775754548/Proyecto_NOVA_-_1_jdmrmb.jpg",
      gallery: [
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776694375/Captura_de_pantalla_2026-01-30_112821_xw3wkv.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776694445/Card_CTA_u24xto.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776694448/Card_project_finished_kcxh9j.jpg"
      ],
      color: "border-violet/30",
      accent: "text-violet"
    },
    {
      id: "audiovisual",
      title: "Apoyo audiovisual",
      subtitle: "Traducción Tecnológica",
      role: "Traductor de Célula y Diseñador de Experiencia.",
      description: "Transformé manuales de código en cápsulas de video intuitivas y narrativas de datos.",
      longDescription: "Como Comunicador Social dentro de un equipo de ingenieros, mi misión fue darle forma humana a la tecnología. Me convertí en el 'traductor' de la célula: transformé manuales de código en cápsulas de video intuitivas, apliqué UX Writing para que las interfaces hablaran el idioma de las vendedoras, y diseñé narrativas de datos (Data Storytelling) para visibilizar el impacto de nuestras herramientas ante la gerencia. Pasé de documentar proyectos a diseñar la experiencia del usuario.",
      impact: "Reducción de la fricción entre el área técnica y operativa mediante contenido intuitivo.",
      details: [
        "Producción de cápsulas de video instructivas.",
        "Aplicación de UX Writing en interfaces críticas.",
        "Diseño de Data Storytelling para gerencia.",
        "Diseño de experiencia de usuario integral."
      ],
      image: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749997/image_5_x35ym8.png",
      videoUrls: [
        "https://www.youtube.com/embed/IBDYWQiCfsk",
        "https://youtu.be/UTkPRY-HcMM",
        "https://youtu.be/xSPlyl6SDRw",
        "https://youtu.be/4gkRfGZkohc",
        "https://youtu.be/Jz5Kqtqsq9A"
      ],
      gallery: [
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749998/image_2_tacjwk.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749997/image_4_a7h3rt.png"
      ],
      color: "border-accent/30",
      accent: "text-accent"
    },
    {
      id: "informe-tic",
      title: "Informe Integral de Innovación TIC",
      subtitle: "Comunicación Corporativa",
      role: "Estratega de Comunicación Corporativa.",
      description: "Traduje la complejidad técnica en un formato de lectura sencilla, visual y humana para la gerencia.",
      longDescription: "El trabajo de la Célula de Innovación y el departamento TIC era altamente técnico y difícil de visualizar para la gerencia. Se necesitaba una herramienta para comunicar el impacto real, los proyectos desarrollados y el valor entregado a la compañía, sin caer en tecnicismos aburridos. Propuse, diseñé y redacté el primer Informe Integral de Innovación Trimestral, además de estructurar los reportes mensuales. Traduje el lenguaje de los ingenieros en un formato de lectura sencilla, visual y humana, logrando evidenciar el valor estratégico del departamento y sentando las bases para futuros reportes a nivel corporativo.",
      impact: "Evidencia del valor estratégico del departamento ante gerencia mediante narrativas humanas.",
      details: [
        "Diseño de reportes mensuales y trimestrales.",
        "Traducción de lenguaje técnico a lenguaje ejecutivo.",
        "Estructuración de KPIs y valor estratégico.",
        "Diseño visual y UX Writing de informes corporativos."
      ],
      image: "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/1_ycsnt5.png",
      pdfPages: [
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/1_ycsnt5.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/2_pkfgtg.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521994/3_vbmaqf.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521994/4_ketcwa.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521994/5_slollo.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521994/6_t9w6td.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/7_f7eqsm.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/8_dbqmpk.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/9_wsjgg2.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521994/10_dikliq.png",
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1776521993/11_ttdrfw.png"
      ],
      gallery: [],
      color: "border-violet/30",
      accent: "text-violet"
    },
  ];

  return (
    <section id="proyectos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-accent mb-4 uppercase">CASOS DE ÉXITO</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase pb-4">PROYECTOS CLAVE</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className={`bg-neutral-900/90 border-2 ${project.color} overflow-hidden h-full flex flex-col hover:border-accent/50 transition-all duration-500 shadow-xl`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full ${project.id === 'nova' ? 'object-contain p-4' : 'object-cover'} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className={`${project.accent} border-current/30 bg-current/5 px-3 py-0.5 rounded-full text-[8px] font-bold tracking-widest uppercase`}>
                      {project.subtitle}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-3 group-hover:text-accent transition-colors uppercase leading-none">{project.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex items-center text-accent text-[10px] font-bold tracking-widest uppercase group-hover:gap-2 transition-all">
                    VER DETALLES <ArrowRight className="ml-1 w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60;
      const totalFrames = duration / frameRate;
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, frameRate);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  const metrics = [
    { value: 20, prefix: "+", text: "Recursos audiovisuales e interactivos creados para capacitación", color: "text-accent" },
    { value: 4, text: "Proyectos tecnológicos con Humanización de Interfaces (UX Writing)", color: "text-violet" },
    { value: 100, suffix: "%", text: "Traducción técnica y optimización de curva de aprendizaje", color: "text-accent" },
    { value: 600, prefix: "+", text: "Usuarios impactados por estrategias de adopción digital", color: "text-violet" },
  ];

  return (
    <section className="relative py-24 px-6 bg-neutral-900/30 overflow-hidden">
      {/* Top and Bottom Gradient Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent opacity-50" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-violet/5 opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.4em] text-accent mb-4 uppercase">IMPACTO LABORAL</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <div className={`text-5xl md:text-7xl font-black tracking-tighter ${m.color} drop-shadow-[0_0_15px_rgba(0,245,255,0.2)]`}>
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <p className="text-gray-400 text-[10px] md:text-xs font-bold max-w-[180px] mx-auto leading-relaxed uppercase tracking-[0.2em]">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "UX Writing",
      description: "Redacción estratégica para guiar al usuario y reducir la carga cognitiva.",
      icon: <PenTool className="w-6 h-6" />,
      color: "border-accent/30"
    },
    {
      title: "Ecosistemas de Aprendizaje",
      description: "Diseño de estructuras para dominar herramientas TIC de forma acelerada.",
      icon: <Layers className="w-6 h-6" />,
      color: "border-violet/30"
    },
    {
      title: "Adopción Digital",
      description: "Estrategias para garantizar que el software sea realmente utilizado.",
      icon: <Cpu className="w-6 h-6" />,
      color: "border-accent/30"
    },
    {
      title: "Traducción Técnica",
      description: "Puente efectivo entre desarrolladores y usuarios finales.",
      icon: <ArrowRight className="w-6 h-6" />,
      color: "border-violet/30"
    },
    {
      title: "Comunicación Organizacional",
      description: "Gestión de la narrativa interna para facilitar cambios tecnológicos.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "border-accent/30"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-accent mb-4 uppercase">CAPACIDADES</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">HABILIDADES ESTRATÉGICAS</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`bg-neutral-900/80 backdrop-blur-xl border-2 ${skill.color} shadow-xl h-full group hover:border-accent/40 transition-all duration-500`}>
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-white mb-3">{skill.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    { name: "DaVinci Resolve", logo: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775753514/DaVinci_Resolve_Studio_lutb3e.png" },
    { name: "CapCut", logo: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775753495/CapCut-Emblem_fp3zab.png" },
    { name: "Canva", logo: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775753495/Canva-icon_no0fp0.png" },
    { name: "Figma", logo: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775753486/Figma-logo.svg_rwvuca.png" },
    { name: "Adobe", logo: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775753496/adobe-logo-0_rewlwr.png" },
  ];

  return (
    <section className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-violet mb-4 uppercase">STACK TECNOLÓGICO</h2>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">HERRAMIENTAS</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all group shadow-xl"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-900/50 flex items-center justify-center mb-2 shadow-inner p-4">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter group-hover:drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors uppercase text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trajectory = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const companies = [
    {
      id: "redcolsa",
      name: "Gane / Redcolsa",
      summary: "Célula de Innovación TIC",
      logo: "https://res.cloudinary.com/drjy92ddg/image/upload/v1775766447/Dise%C3%B1o_sin_t%C3%ADtulo_7_rqawed.png",
      details: {
        company: "Redcolsa es la compañía detrás de Gane en Cali, liderando la operación de servicios transaccionales y de juegos de suerte y azar más grande de la región.",
        area: "Me desempeño en el departamento de Tecnología (TIC), específicamente dentro de la Célula de Innovación.",
        challenge: "Mi labor consiste en cerrar la brecha entre la complejidad técnica del software y la comprensión del usuario final, utilizando la comunicación estratégica para facilitar la transformación digital de la compañía."
      }
    }
  ];

  return (
    <section id="trayectoria" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-violet mb-4 uppercase">TRAYECTORIA</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">EXPERIENCIA CORPORATIVA</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mb-12">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => setActiveId(activeId === company.id ? null : company.id)}
              className={`group relative transition-all duration-500 ${activeId === company.id ? 'scale-110' : 'grayscale opacity-70 hover:grayscale-0 hover:opacity-100'}`}
            >
              <div className="w-64 h-32 md:w-80 md:h-40 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 overflow-hidden group-hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:border-accent/50">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {activeId === company.id && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#00F5FF]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeId && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="overflow-hidden"
            >
              <Card className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent">
                        <Briefcase size={16} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">La Compañía</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {companies.find(c => c.id === activeId)?.details.company}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-violet">
                        <Cpu size={16} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Mi Área</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {companies.find(c => c.id === activeId)?.details.area}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent">
                        <Zap size={16} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">El Reto</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {companies.find(c => c.id === activeId)?.details.challenge}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/joan-mosquera", label: "LinkedIn", color: "hover:text-accent" },
    { icon: <Instagram size={24} />, href: "https://instagram.com/by_joans", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Mail size={24} />, href: "mailto:Joan.mosquera@uao.edu.co", label: "Email", color: "hover:text-violet" },
  ];

  return (
    <footer id="contacto" className="pt-32 pb-12 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 uppercase text-gradient">
              ¿Hablamos sobre <br /> <span className="text-accent">adopción digital?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Estoy disponible para proyectos estratégicos que requieran humanizar la tecnología.
            </p>
            
            <div className="flex justify-center gap-8 mb-12">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-all duration-300 transform hover:scale-125 ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a href="mailto:Joan.mosquera@uao.edu.co">
              <Button className="bg-accent hover:bg-accent/90 text-black rounded-full px-12 py-8 text-sm font-bold tracking-widest flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                <Mail size={20} /> TRABAJEMOS JUNTOS
              </Button>
            </a>
          </motion.div>
        </div>

        <Separator className="mb-12 bg-white/5" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase">
          <p>© 2026 JOAN S. MOSQUERA</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Especialista en Adopción Digital</a>
            <a href="#" className="hover:text-accent transition-colors">TIC & Producto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Sticky Reveal Section */}
        <div className="relative">
          <div className="sticky top-0 h-screen overflow-hidden z-0">
            <VideoPitch />
          </div>
          
          <div className="relative z-10 bg-transparent">
            <Focus />
            <div className="bg-background">
              <Experience />
              <Manifesto />
              <Projects />
              <ImpactMetrics />
              <Skills />
              <Tools />
              <Trajectory />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
