import { Variants } from "framer-motion";

// Animaciones base reutilizables
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// texto de secciones
export const revealText: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// contenedor de cards
export const staggerCards: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

// animación de cada card
export const fadeCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};


// CONTENEDOR PARA CASCADA
/*
export const skillsContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
export const skillItem: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(6px)"
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};*/
