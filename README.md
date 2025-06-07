# 🎮 Escape Room Creator - Projecte Educatiu

## 📋 Descripció del Projecte

**Escape Room Creator** és una plataforma educativa innovadora per al mòdul de **Disseny d'Interfícies Web (DIW)** del cicle formatiu de grau superior **Desenvolupament d'Aplicacions Web**. Aquest projecte permet als estudiants crear experiències immersives d'escape rooms virtuals mentre desenvolupen competències en disseny web, interfícies 3D i accessibilitat.

### 🎯 Objectius i Resultats d'Aprenentatge

El projecte cobrix els **6 Resultats d'Aprenentatge (RA)** específics del currículum oficial:

- **RA1 (15%)**: Planifica la creació d'interfícies web valorant i aplicant especificacions de disseny
- **RA2 (35%)**: Crea interfícies web homogenis definint i aplicant estils
- **RA3 (20%)**: Prepara arxius multimèdia per a la web analitzant-ne les característiques
- **RA4 (10%)**: Integra contingut multimèdia en documents web valorant-ne l'aportació
- **RA5 (10%)**: Desenvolupa interfícies web accessibles aplicant tècniques de verificació
- **RA6 (10%)**: Desenvolupa interfícies web amigables analitzant pautes d'usabilitat

### 📅 Planificació Temporal - 6 Sprints (21 setmanes)

| Sprint | Setmanes | Objectius clau | RA |
|--------|----------|----------------|-----|
| **Sprint 1** | 1-3 | Introducció, guia d'estils i mockups a Figma | RA1 |
| **Sprint 2** | 4-6 | Maquetació HTML de vistes existents/noves | RA1+RA2 |
| **Sprint 3** | 7-11 | Integració TailwindCSS/ShadCN, estils avançats | RA2 |
| **Sprint 4** | 12-16 | A-Frame, objectes 3D, prototip sala 3D | RA3+RA4 |
| **Sprint 5** | 17-18 | Elements interactius, accessibilitat i usabilitat | RA5+RA6 |
| **Sprint 6** | 19-21 | Documentació, verificació navegadors i presentació | RA2-RA6 |

## 🚀 Tecnologies i Eines

### Desenvolupament Web
- **Frontend**: Next.js 14, React 18, TypeScript
- **Estils**: Tailwind CSS, Shadcn/UI components
- **Validació**: HTML5 Validator, CSS Validator, Lighthouse

### Experiències 3D/VR
- **Realitat Virtual**: A-Frame per a sales immersives
- **Modelatge 3D**: Blender, SketchUp (opcionals)
- **Formats**: GLTF, OBJ per a objectes 3D

### Disseny i Prototipat
- **UX/UI**: Figma per a mockups i guies d'estils
- **Gràfics**: GIMP/Photoshop per a optimització d'imatges
- **Accessibilitat**: axe-core, WAVE per a verificació WCAG

## 📁 Estructura del Projecte

```
escape-room-creator/
├── 📚 professorat/                    # Documentació per al professorat
│   ├── guia_didactica.pdf            # Guia didàctica completa
│   ├── planificacio_temporal.xlsx    # Planificació temporal
│   ├── materials_recursos/           # Materials i recursos
│   ├── estrategies_metodologiques.pdf # Estratègies metodològiques
│   └── avaluacio/                    # Avaluació
│       ├── instruments/              # Instruments d'avaluació
│       └── criteris.pdf             # Criteris d'avaluació
├── 👨‍🎓 alumnnat/                      # Recursos per a l'alumnat
│   ├── dossier_projecte.pdf         # Dossier del projecte
│   ├── tutorials/                   # Tutorials
│   ├── exemples/                    # Exemples
│   └── eines_treball/               # Eines de treball
└── 🌐 web/                          # Aplicació web Next.js
    ├── app/                         # Aplicació Next.js
    ├── components/                  # Components reutilitzables
    ├── public/                      # Recursos estàtics
    └── package.json                 # Configuració del projecte
```

## 🛠️ Instal·lació i Configuració

```bash
# Clonar el repositori
git clone https://github.com/lluisalen/escape-room-creator.git
cd escape-room-creator

# Navegar a la carpeta de l'aplicació web
cd web

# Instal·lar dependències
npm install

# Executar en mode desenvolupament
npm run dev
```

Visita http://localhost:3000 per veure l'aplicació.

## 🎯 Metodologia Pedagògica

### Aprenentatge Basat en Projectes (ABP)
- Projecte real i transferible a diferents contextos educatius
- Desenvolupament incremental per sprints
- Avaluació contínua amb feedback constant

### Gamificació Educativa
- Creació d'escape rooms com a motivació intrínseca
- Mecàniques de joc aplicades a l'aprenentatge
- Narrativa immersiva

### Disseny Universal per a l'Aprenentatge (DUA)
- Múltiples formes de representació (visual, auditiva, kinestèsica)
- Diversos mitjans d'expressió i acció
- Variades opcions de compromís i motivació

## 🔍 Característiques Tècniques

### Interfícies Web Modernes
- Disseny responsive i mobile-first
- Components reutilitzables amb Shadcn/UI
- Tema fosc/clar per accessibilitat

### Experiències 3D Immersives
- Sales virtuals navegables amb A-Frame
- Controls intuïtius (ratolí, teclat, VR)
- Optimització per a rendiment web

### Accessibilitat i Usabilitat
- Compliment WCAG 2.1 nivell AA
- Tests automatitzats amb Lighthouse
- Suport per a tecnologies assistives

## 👥 Transferibilitat i Contribució

Aquest projecte està dissenyat per ser **transferible** a:
- Altres centres educatius de FP
- Diferents especialitats de desenvolupament web
- Contextos d'educació no formal

## 📄 Llicències i Drets d'Autor

- **Codi**: MIT License - Ús lliure amb atribució
- **Contingut educatiu**: Creative Commons BY-SA 4.0
- **Assets 3D**: Respectar llicències individuals (CC0, CC BY, etc.)
