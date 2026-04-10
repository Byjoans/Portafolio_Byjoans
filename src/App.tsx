/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Mail, ArrowRight, Menu, X, Linkedin, Play, CheckCircle2, Cpu, Layout, Video, PenTool, Layers, ExternalLink, Users, Zap, MessageSquare, Info, GraduationCap, Briefcase, Wrench, Mountain, Trophy, Instagram, MessageCircle } from "lucide-react";
import * as React from "react";
import { useState, useRef } from "react";
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
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-black rounded-full px-5 text-[11px] font-bold">
            CONTACTAR
          </Button>
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
          <Button className="bg-accent hover:bg-accent/90 text-black rounded-full w-full">CONTACTAR</Button>
        </motion.div>
      )}
    </nav>
  );
};

const ProfileModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
            className="relative w-full max-w-2xl bg-neutral-900/90 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 md:p-12">
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
                <p className="text-gray-300 leading-relaxed text-lg italic">
                  "Estudiante de décimo semestre de Comunicación Social y Periodismo en la UAO. Aunque mi pasión y formación nacen en la producción audiovisual y sonora, he escalado mi perfil hacia la comunicación estratégica organizacional. Hoy, conecto el lenguaje audiovisual con la transformación digital de las empresas. Me destaco por mi excelente desempeño en edición, mi capacidad para liderar equipos multidisciplinarios y mi habilidad para traducir procesos complejos en narrativas que generan valor y facilitan el trabajo en equipo."
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
      className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center"
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
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-black rounded-full px-10 font-bold shadow-[0_0_30px_rgba(0,245,255,0.4)]">
                  VER PROYECTOS
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setIsModalOpen(true)}
                  className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 font-bold flex items-center gap-2"
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
            initial={{ opacity: 0, filter: "blur(40px)", scale: 1.2, x: 80 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1.8, ease: "easeOut" }}
            className="lg:col-span-8 lg:absolute lg:-right-32 lg:top-1/2 lg:-translate-y-1/2 z-10 mt-16 lg:mt-0 p-12"
          >
            <div className="relative w-full max-w-3xl xl:max-w-4xl mx-auto">
              <div className="relative aspect-square w-full">
                <img 
                  src="https://res.cloudinary.com/drjy92ddg/image/upload/v1775747466/Dise%C3%B1o_sin_t%C3%ADtulo_4_s7tytp.png" 
                  alt="Joan S. Mosquera Illustration" 
                  className="w-full h-full object-cover rounded-full border-[12px] border-white/5 shadow-[0_0_100px_rgba(0,245,255,0.2)] brightness-[0.8] contrast-[1.1] saturate-[0.9]"
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
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,245,255,0.1)] bg-black aspect-video group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-violet/5 pointer-events-none z-10" />
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full flex items-center justify-center bg-neutral-900">
              <img 
                src="https://picsum.photos/seed/pitch-v3/1200/675" 
                alt="Video Pitch Thumbnail" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={40} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-10 left-12 z-20 text-left">
                <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">VIDEO PITCH</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Mi propuesta de valor en 2 minutos</h3>
              </div>
            </div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
};

const Focus = () => {
  return (
    <section id="enfoque" className="relative py-40 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
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

const Manifesto = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = "Como único perfil de humanidades en la Célula de Innovación, asumí el liderazgo como una postura y no como un cargo. Comprendí que mi rol no era competir con el conocimiento técnico, sino complementarlo siendo la voz del usuario final en la planificación de software. Fui más allá de las tareas asignadas impulsando iniciativas estratégicas, como la plataforma 'NOVA' y formatos de microlearning, liderando así un cambio cultural que demostró que la comunicación es el verdadero motor para que la tecnología se adopte y funcione con éxito.";
  const summarizedText = "Como único perfil de humanidades en la Célula de Innovación, lideré desde la comunicación estratégica para humanizar la tecnología. Mi rol fue ser la voz del usuario final, impulsando iniciativas como 'NOVA'...";

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[2.5rem] bg-white/5 backdrop-blur-md border-l-4 border-accent"
        >
          <div className="space-y-8 text-center">
            <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5 px-6 py-2 rounded-full text-sm font-bold tracking-[0.4em] uppercase">
              MANIFIESTO DE LIDERAZGO
            </Badge>

            <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-black/20">
              <img 
                src="https://res.cloudinary.com/drjy92ddg/image/upload/v1775749981/signal-2026-03-18-091153_002_uor2yp.jpg" 
                alt="Manifesto Visual" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
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

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
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
            className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            <div className="absolute top-6 right-6 z-20">
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <Badge variant="outline" className={`${project.accent} border-current/30 bg-current/5 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4`}>
                  {project.title}
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase">{project.subtitle}</h2>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Galería del Proyecto</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img: string, i: number) => (
                      <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <img 
                          src={img} 
                          alt={`${project.title} gallery ${i}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
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
        "https://res.cloudinary.com/drjy92ddg/image/upload/v1775749982/Screen_home_1_q3mhin.jpg"
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
      gallery: [],
      color: "border-accent/30",
      accent: "text-accent"
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
                      {project.title}
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
    { icon: <MessageCircle size={24} />, href: "https://wa.me/573167563921", label: "WhatsApp", color: "hover:text-green-400" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/joan-mosquera", label: "LinkedIn", color: "hover:text-accent" },
    { icon: <Instagram size={24} />, href: "https://instagram.com/by_joans", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Mail size={24} />, href: "mailto:Joan.mosquera@uao.edu.co", label: "Email", color: "hover:text-violet" },
  ];

  return (
    <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-black/20">
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

            <Button className="bg-accent hover:bg-accent/90 text-black rounded-full px-12 py-8 text-sm font-bold tracking-widest flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(0,245,255,0.2)]">
              <Mail size={20} /> TRABAJEMOS JUNTOS
            </Button>
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
        <VideoPitch />
        <Focus />
        <Experience />
        <Manifesto />
        <Projects />
        <Skills />
        <Tools />
        <Trajectory />
      </main>
      <Footer />
    </div>
  );
}
