
/**
 * @file inventario.js
 * @description Base de datos local y plano dinámico para CaseDex.
 * @author Josvar
 * @copyright © 2026 Josvar. Todos los derechos reservados.
 * Prohibida su reproducción o copia sin autorización explícita.
 */

// 💾 BASE DE DATOS LOCAL CON SERIES PARA LA EVOLUCIÓN
const bdInventario = {
    

    // 📱 Samsung

    // ==========================================
    // 1. GAMA BAJA / ENTRADA (MENOR POTENCIA)
    // ==========================================
    "Galaxy J3 2016": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Pequeño", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J5 2016": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Pequeño", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J3 2017": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Pequeño", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "J3 Pro", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J5 2017": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Mediano", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "J5 Pro", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J7 2017": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "J7 Pro", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J4 Plus": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "J6 Plus", cubrecamaras: "Ninguna", carcasas: "J6 Plus (Validar botones)" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J6 2018": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Mediano", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy J6 Plus": {
        marca: "Samsung", serie: "Serie J",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "J4 Plus", cubrecamaras: "Ninguna", carcasas: "J4 Plus (Hueco cámara más grande)" },
        ubicacion: { mueble: "F", numeroCajon: "26", nota: "Zona F" }
    },
    "Galaxy A10": {
        marca: "Samsung", serie: "Modelos A Antiguos",
        caracteristicas: { tamano: "Mediano", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A10s (Verificar flex)", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A11": {
        marca: "Samsung", serie: "Modelos A Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A20e": {
        marca: "Samsung", serie: "Modelos A Antiguos",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A20": {
        marca: "Samsung", serie: "Modelos A Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A30, A50", cubrecamaras: "A30", carcasas: "A30 (Mismo chasis, cambia huella atrás)" },
        ubicacion: { mueble: "F", numeroCajon: "17", nota: "Zona F" }
    },
    "Galaxy A20s": {
        marca: "Samsung", serie: "Modelos A Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A02s": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A03s (A veces varía)", cubrecamaras: "Ninguna", carcasas: "M02s" },
        ubicacion: { mueble: "F", numeroCajon: "12", nota: "Zona F" }
    },
    "Galaxy A03 Core": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "No tiene", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "12", nota: "Zona F" }
    },
    "Galaxy A03s": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A02s", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "12", nota: "Zona F" }
    },
    "Galaxy A03": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "12", nota: "Zona F" }
    },
    "Galaxy A04e": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A04", cubrecamaras: "A04", carcasas: "A04 (Revisar flash)" },
        ubicacion: { mueble: "F", numeroCajon: "12", nota: "Zona F" }
    },
    "Galaxy A04": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A04e", cubrecamaras: "A04e", carcasas: "A04e" },
        ubicacion: { mueble: "F", numeroCajon: "12", nota: "Zona F" }
    },
    "Galaxy A05": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Reconocimiento Facial", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "18", nota: "Zona F" }
    },
    "Galaxy A05s": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "18", nota: "Zona F" }
    },
    "Galaxy A06": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A07": {
        marca: "Samsung", serie: "Serie A0x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "3", nota: "Zona F" }
    },

    // ==========================================
    // 2. GAMA MEDIA-BAJA (SERIE A1x Y SERIE M BÁSICA)
    // ==========================================
    "Galaxy A12": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A12s, M12", cubrecamaras: "M12", carcasas: "A12s, M12 (Calza idéntico)" },
        ubicacion: { mueble: "F", numeroCajon: "20", nota: "Zona F" }
    },
    "Galaxy A12s": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A12", cubrecamaras: "A12", carcasas: "A12, M12" },
        ubicacion: { mueble: "F", numeroCajon: "21", nota: "Zona F" }
    },
    "Galaxy A13 4G": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A13 5G (Variación Hz)", cubrecamaras: "Ninguna", carcasas: "No compatible con A13 5G" },
        ubicacion: { mueble: "F", numeroCajon: "19", nota: "Zona F" }
    },
    "Galaxy A13 5G": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A13 4G", cubrecamaras: "Ninguna", carcasas: "No compatible con A13 4G" },
        ubicacion: { mueble: "F", numeroCajon: "19", nota: "Zona F" }
    },
    "Galaxy A14 (5G)": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "M14 5G", cubrecamaras: "Ninguna", carcasas: "A14 4G y 5G usan el mismo forro" },
        ubicacion: { mueble: "F", numeroCajon: "13", nota: "Zona F" }
    },
    "Galaxy A15 (5G)": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A15 4G", cubrecamaras: "A15 4G", carcasas: "A15 4G comparte misma carcasa" },
        ubicacion: { mueble: "F", numeroCajon: "7", nota: "Zona F" }
    },
    "Galaxy A16": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "1", nota: "Zona F" }
    },
    "Galaxy A17": {
        marca: "Samsung", serie: "Serie A1x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "1", nota: "Zona F" }
    },
    "Galaxy A21": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A21s (Diferente flex)", cubrecamaras: "Ninguna", carcasas: "No calza en A21s" },
        ubicacion: { mueble: "F", numeroCajon: "14", nota: "Zona F" }
    },
    "Galaxy A21s": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Exclusivo A21s" },
        ubicacion: { mueble: "F", numeroCajon: "14", nota: "Zona F" }
    },
    "Galaxy A22": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A22 5G (Ojo: dimensiones cambian)", cubrecamaras: "Ninguna", carcasas: "A22 4G únicamente" },
        ubicacion: { mueble: "F", numeroCajon: "14", nota: "Zona F" }
    },
    "Galaxy M22": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A22 4G", cubrecamaras: "A22 4G", carcasas: "A22 4G (Revisar textura trasera)" },
        ubicacion: { mueble: "F", numeroCajon: "14", nota: "Zona F" }
    },
    "Galaxy M21": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "M30s, M31", cubrecamaras: "M30s", carcasas: "M30s, M31" },
        ubicacion: { mueble: "F", numeroCajon: "29", nota: "Zona F" }
    },
    "Galaxy M30s": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "M21, M31", cubrecamaras: "M21", carcasas: "M21, M31" },
        ubicacion: { mueble: "F", numeroCajon: "29", nota: "Zona F" }
    },
    "Galaxy M31": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "M30s, M21", cubrecamaras: "Ninguna (M31 tiene más módulos)", carcasas: "Forros de M30s le quedan tapando una cámara" },
        ubicacion: { mueble: "F", numeroCajon: "29", nota: "Zona F" }
    },
    "Galaxy M23": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "M33", cubrecamaras: "Ninguna", carcasas: "A veces compatible con M33 (Verificar grosor)" },
        ubicacion: { mueble: "F", numeroCajon: "29", nota: "Zona F" }
    },
    "Galaxy M33": {
        marca: "Samsung", serie: "Serie M y A2x Antiguos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "M23", cubrecamaras: "Ninguna", carcasas: "M23" },
        ubicacion: { mueble: "F", numeroCajon: "29", nota: "Zona F" }
    },

    // ==========================================
    // 3. GAMA MEDIA ESTÁNDAR (A2x MODERNOS, A3x Y A4x)
    // ==========================================
    "Galaxy A5 2017": {
        marca: "Samsung", serie: "Gama Media Histórica",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Botón Home Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A5 2018": {
        marca: "Samsung", serie: "Gama Media Histórica",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A8 2018", cubrecamaras: "A8 2018", carcasas: "Conocido comercialmente como A8 2018" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A6 Plus": {
        marca: "Samsung", serie: "Gama Media Histórica",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "J8 2018 (Pantalla LCD vs AMOLED)", cubrecamaras: "J8 2018", carcasas: "J8 2018 (Calza perfecto cuerpo metálico)" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A30": {
        marca: "Samsung", serie: "Gama Media Histórica",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A20, A50", cubrecamaras: "A20", carcasas: "A20 (Mismo tamaño, cuadra la huella)" },
        ubicacion: { mueble: "F", numeroCajon: "17", nota: "Zona F" }
    },
    "Galaxy A30s": {
        marca: "Samsung", serie: "Gama Media Histórica",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A50, A50s", cubrecamaras: "A50s", carcasas: "A50 / A50s (No tiene huella atrás, tapa lisa)" },
        ubicacion: { mueble: "F", numeroCajon: "17", nota: "Zona F" }
    },
    "Galaxy A23 (5G)": {
        marca: "Samsung", serie: "Serie A2x Modernos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A23 4G", cubrecamaras: "A23 4G", carcasas: "Mismas dimensiones para 4G y 5G" },
        ubicacion: { mueble: "F", numeroCajon: "8", nota: "Zona F" }
    },
    "Galaxy A24 (4G)": {
        marca: "Samsung", serie: "Serie A2x Modernos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Diseño de cámaras independientes flotantes" },
        ubicacion: { mueble: "F", numeroCajon: "2", nota: "Zona F" }
    },
    "Galaxy A25 (5G)": {
        marca: "Samsung", serie: "Serie A2x Modernos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Borde con relieve Key Island" },
        ubicacion: { mueble: "F", numeroCajon: "2", nota: "Zona F" }
    },
    "Galaxy A26": {
        marca: "Samsung", serie: "Serie A2x Modernos",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "2", nota: "Zona F" }
    },
    "Galaxy A40": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Trasera", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Exclusivo compacto" },
        ubicacion: { mueble: "F", numeroCajon: "6", nota: "Zona F" }
    },
    "Galaxy A41": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "6", nota: "Zona F" }
    },
    "Galaxy A31": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Módulo rectangular grande" },
        ubicacion: { mueble: "F", numeroCajon: "16", nota: "Zona F" }
    },
    "Galaxy A32 (4G / 5G)": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella Lateral (5G)/Pantalla (4G)", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Diferentes dimensiones entre 4G y 5G", cubrecamaras: "Ninguna", carcasas: "⚠️ Forros NO son compatibles entre versión 4G y 5G" },
        ubicacion: { mueble: "F", numeroCajon: "16", nota: "Zona F" }
    },
    "Galaxy A42 (5G)": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Diseño trasero de bloques" },
        ubicacion: { mueble: "F", numeroCajon: "6", nota: "Zona F" }
    },
    "Galaxy A33 (5G)": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Módulo integrado en tapa trasera" },
        ubicacion: { mueble: "C", numeroCajon: "22", nota: "Gama Media Núcleo" }
    },
    "Galaxy A34": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Líneas traseras planas limpias" },
        ubicacion: { mueble: "F", numeroCajon: "15", nota: "Zona F" }
    },
    "Galaxy A35 (5G)": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A55 (A veces calza cristal)", cubrecamaras: "Ninguna", carcasas: "Estructura Key Island robusta" },
        ubicacion: { mueble: "F", numeroCajon: "9", nota: "Zona F" }
    },
    "Galaxy A36": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Módulo unificado vertical" },
        ubicacion: { mueble: "F", numeroCajon: "3", nota: "Zona F" }
    },
    "Galaxy A37": {
        marca: "Samsung", serie: "Serie A3x y A4x",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "6", nota: "Zona F" }
    },

    // ==========================================
    // 4. GAMA MEDIA-ALTA (SERIE A5x Y SERIE A7x)
    // ==========================================
    "Galaxy A50": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A30, A20, A50s", cubrecamaras: "A50s", carcasas: "A30s, A50s (Comparten chasis perfecto)" },
        ubicacion: { mueble: "F", numeroCajon: "17", nota: "Zona F" }
    },
    "Galaxy A51 (5G)": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A51 4G (Ojo flex 5G cambia)", cubrecamaras: "A51 4G", carcasas: "⚠️ Versión 5G es ligeramente más gruesa que la 4G" },
        ubicacion: { mueble: "F", numeroCajon: "17", nota: "Zona F" }
    },
    "Galaxy A52 (5G)": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A52 4G, A52s 5G", cubrecamaras: "A52s 5G", carcasas: "A52 4G, A52s 5G (Mismo forro exacto)" },
        ubicacion: { mueble: "F", numeroCajon: "11", nota: "Zona F" }
    },
    "Galaxy A53 (5G)": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "No tiene plug de audífonos" },
        ubicacion: { mueble: "F", numeroCajon: "5", nota: "Zona F" }
    },
    "Galaxy A54 (5G)": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Aspecto premium de cristal trasero" },
        ubicacion: { mueble: "F", numeroCajon: "10", nota: "Zona F" }
    },
    "Galaxy A55 (5G)": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Metálico", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Marcos de aluminio planos con relieve" },
        ubicacion: { mueble: "F", numeroCajon: "4", nota: "Zona F" }
    },
    "Galaxy A56": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Metálico", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Módulo metálico de cámaras elevado" },
        ubicacion: { mueble: "F", numeroCajon: "4", nota: "Zona F" }
    },
    "Galaxy A57": {
        marca: "Samsung", serie: "Serie A5x Potente",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Key Island Metálico", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "F", numeroCajon: "18", nota: "Zona F" }
    },
    "Galaxy A7 2018": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "Micro-USB", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Primer triple cámara lateral" },
        ubicacion: { mueble: "F", numeroCajon: "24", nota: "Zona F" }
    },
    "Galaxy A70": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A70s", cubrecamaras: "A70s", carcasas: "A70s (Estructura idéntica de resina)" },
        ubicacion: { mueble: "F", numeroCajon: "23", nota: "Zona F" }
    },
    "Galaxy A71": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "A71 5G (Varía chasis)", cubrecamaras: "Ninguna", carcasas: "Solo calza versión 4G estándar" },
        ubicacion: { mueble: "F", numeroCajon: "23", nota: "Zona F" }
    },
    "Galaxy A72": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Estructura mate unificada" },
        ubicacion: { mueble: "F", numeroCajon: "23", nota: "Zona F" }
    },
    "Galaxy A73": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Último modelo de la serie A7x" },
        ubicacion: { mueble: "F", numeroCajon: "23", nota: "Zona F" }
    },
    "Galaxy A91": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "S10 Lite", cubrecamaras: "S10 Lite", carcasas: "S10 Lite (Mismo clon estructural)" },
        ubicacion: { mueble: "F", numeroCajon: "28", nota: "Zona F" }
    },
    "Galaxy M52": {
        marca: "Samsung", serie: "Serie A7x y Premium",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella Lateral", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Chasis ultra delgado" },
        ubicacion: { mueble: "F", numeroCajon: "29", nota: "Zona F" }
    },

    // ==========================================
    // 5. GAMA ALTA / PREMIUM (MÁXIMA POTENCIA BRUTA)
    // ==========================================
    "Galaxy S6": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Pequeño", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Botón Home Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "No compatible con versión Edge" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S7": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Pequeño", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Botón Home Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Tapa curva trasera lisa" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S7 Edge": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Mediano", puerto: "Micro-USB", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Botón Home Huella", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Cantos ultra delgados curvos" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S8": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Huella Trasera (Lado de cámara)", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Cuerpo compacto pantalla curva" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S8 Plus": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Huella Trasera (Lado de cámara)", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Versión alargada del S8" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S9": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Software", faceId: "Huella Trasera Abajo", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Huella reubicada abajo" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S9 Plus": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Trasera Abajo", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Módulo doble vertical" },
        ubicacion: { mueble: "F", numeroCajon: "25", nota: "Zona F" }
    },
    "Galaxy S10": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Línea horizontal de cámaras" },
        ubicacion: { mueble: "F", numeroCajon: "28", nota: "Zona F" }
    },
    "Galaxy S10 Plus": {
        marca: "Samsung", serie: "Serie S Histórica",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Cámara frontal doble en pantalla" },
        ubicacion: { mueble: "F", numeroCajon: "28", nota: "Zona F" }
    },
    "Galaxy Note 8": {
        marca: "Samsung", serie: "Serie Note Legendaria",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Trasera + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Esquinas muy cuadradas con ranura lápiz" },
        ubicacion: { mueble: "F", numeroCajon: "27", nota: "Zona F" }
    },
    "Galaxy Note 9": {
        marca: "Samsung", serie: "Serie Note Legendaria",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Software", faceId: "Huella Trasera Separada + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Huella física centrada abajo de cámaras" },
        ubicacion: { mueble: "F", numeroCajon: "27", nota: "Zona F" }
    },
    "Galaxy Note 10": {
        marca: "Samsung", serie: "Serie Note Legendaria",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Versión Note compacta" },
        ubicacion: { mueble: "F", numeroCajon: "27", nota: "Zona F" }
    },
    "Galaxy Note 10 Pro": {
        marca: "Samsung", serie: "Serie Note Legendaria",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Note 10 Plus (Mismo nombre comercial)", cubrecamaras: "Note 10 Plus", carcasas: "Note 10 Plus" },
        ubicacion: { mueble: "F", numeroCajon: "27", nota: "Zona F" }
    },
    "Galaxy Note 20": {
        marca: "Samsung", serie: "Serie Note Legendaria",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "⚠️ Tapa trasera plana (Versión no Ultra)" },
        ubicacion: { mueble: "F", numeroCajon: "30", nota: "Zona F" }
    },
    "Galaxy Note 20 Plus": {
        marca: "Samsung", serie: "Serie Note Legendaria",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Note 20 Ultra", cubrecamaras: "Note 20 Ultra", carcasas: "Note 20 Ultra (Módulo gigante elevado)" },
        ubicacion: { mueble: "F", numeroCajon: "30", nota: "Zona F" }
    },

    "Galaxy S20 FE": {
        marca: "Samsung", serie: "Serie S",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Software", faceId: "Huella en Pantalla + S-Pen", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "Ninguna", carcasas: "Versión Note compacta" },
        ubicacion: { mueble: "F", numeroCajon: "27", nota: "Zona F" }
    },

    // ==========================================
    // ZONA SAMSUNG - SERIE S, FLIP Y FOLD (CON TAMAÑOS SIMPLIFICADOS)
    // ==========================================

    "Galaxy S20 FE": {
        marca: "Samsung",
        serie: "S20",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Super AMOLED 120Hz", biometria: "Lector en pantalla", detalles: "Edición Fan Edition" },
        compatibilidades: { pantalla: "S20 FE", cubrecamaras: "S20 FE", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "42", nota: "ZONA E" }
    },

    "Galaxy S21 FE": {
        marca: "Samsung",
        serie: "S21",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED 2X", biometria: "Lector en pantalla", detalles: "Edición Fan Edition S21" },
        compatibilidades: { pantalla: "S21 FE", cubrecamaras: "S21 FE", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "30", nota: "ZONA E" }
    },

    "Galaxy S21": {
        marca: "Samsung",
        serie: "S21",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED (Plana)", biometria: "Lector ultrasónico", detalles: "Gama Alta Base" },
        compatibilidades: { pantalla: "S21 (Plano)", cubrecamaras: "S21", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "28", nota: "ZONA E" }
    },

    "Galaxy S21 Plus": {
        marca: "Samsung",
        serie: "S21",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED (Grande)", biometria: "Lector ultrasónico", detalles: "Tapa trasera de vidrio" },
        compatibilidades: { pantalla: "S21 Plus", cubrecamaras: "S21 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "6", nota: "ZONA E" }
    },

    "Galaxy S21 Ultra": {
        marca: "Samsung",
        serie: "S21",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras + Láser", tipoPantalla: "Dynamic AMOLED (Curva)", biometria: "Lector ultrasónico", detalles: "Compatible con S-Pen" },
        compatibilidades: { pantalla: "S21 Ultra (Curvo)", cubrecamaras: "S21 Ultra", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "6", nota: "ZONA E" }
    },

    "Galaxy S22": {
        marca: "Samsung",
        serie: "S22",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED 2X flat", biometria: "Lector ultrasónico", detalles: "Diseño compacto" },
        compatibilidades: { pantalla: "S22 / S23 (Compatibles)", cubrecamaras: "S22", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "29", nota: "ZONA E" }
    },

    "Galaxy S22 Plus": {
        marca: "Samsung",
        serie: "S22",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED 2X", biometria: "Lector ultrasónico", detalles: "Brillo de 1750 nits" },
        compatibilidades: { pantalla: "S22 Plus / S23 Plus", cubrecamaras: "S22 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "17", nota: "ZONA E" }
    },

    "Galaxy S22 Ultra": {
        marca: "Samsung",
        serie: "S22",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras + Láser", tipoPantalla: "Dynamic AMOLED (Curva Edge)", biometria: "Lector ultrasónico", detalles: "S-Pen incorporado dentro" },
        compatibilidades: { pantalla: "S22 Ultra / S23 Ultra UV", cubrecamaras: "S22 Ultra", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "5", nota: "ZONA E" }
    },

    "Galaxy S23 FE": {
        marca: "Samsung",
        serie: "S23",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED flat", biometria: "Lector óptico", detalles: "Bordes un poco más gruesos" },
        compatibilidades: { pantalla: "S23 FE / A54 (Mismo vidrio)", cubrecamaras: "S23 FE", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "40", nota: "ZONA E" }
    },

    "Galaxy S23": {
        marca: "Samsung",
        serie: "S23",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED flat", biometria: "Lector ultrasónico", detalles: "Procesador Snapdragon global" },
        compatibilidades: { pantalla: "S23 / S22 (Compatibles)", cubrecamaras: "S23", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "28", nota: "ZONA E" }
    },

    "Galaxy S23 Plus": {
        marca: "Samsung",
        serie: "S23",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED flat", biometria: "Lector ultrasónico", detalles: "Batería ampliada" },
        compatibilidades: { pantalla: "S23 Plus / S22 Plus", cubrecamaras: "S23 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "16", nota: "ZONA E" }
    },

    "Galaxy S23 Ultra": {
        marca: "Samsung",
        serie: "S23",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras (200MP)", tipoPantalla: "Dynamic AMOLED (Curva leve)", biometria: "Lector ultrasónico", detalles: "Cámara angular de alta resolución" },
        compatibilidades: { pantalla: "S23 Ultra / S22 Ultra", cubrecamaras: "S23 Ultra (Individuales)", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "4", nota: "ZONA E" }
    },

    "Galaxy S24 FE": {
        marca: "Samsung",
        serie: "S24",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED flat grande", biometria: "Lector en pantalla", detalles: "Pantalla mayor que FE anteriores" },
        compatibilidades: { pantalla: "S24 FE", cubrecamaras: "S24 FE", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "39", nota: "ZONA E" }
    },

    "Galaxy S24": {
        marca: "Samsung",
        serie: "S24",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "LTPO AMOLED flat", biometria: "Lector ultrasónico", detalles: "Marcos ultra reducidos" },
        compatibilidades: { pantalla: "S24 (Plano)", cubrecamaras: "S24 (Lentes individuales)", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "27", nota: "ZONA E" }
    },

    "Galaxy S24 Plus": {
        marca: "Samsung",
        serie: "S24",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "LTPO AMOLED QHD+", biometria: "Lector ultrasónico", detalles: "Resolución de pantalla mejorada" },
        compatibilidades: { pantalla: "S24 Plus", cubrecamaras: "S24 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "15", nota: "ZONA E" }
    },

    "Galaxy S24 Ultra": {
        marca: "Samsung",
        serie: "S24",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras + Láser", tipoPantalla: "Dynamic AMOLED (Plana total)", biometria: "Lector ultrasónico", detalles: "Marco construido en Titanio" },
        compatibilidades: { pantalla: "S24 Ultra (Plano plano)", cubrecamaras: "S24 Ultra (Bisel cuadrado)", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "3", nota: "ZONA E" }
    },

    "Galaxy S25 EDGE": {
        marca: "Samsung",
        serie: "S25",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "AMOLED pantalla curva", biometria: "Lector ultrasónico", detalles: "Variante con bordes redondeados" },
        compatibilidades: { pantalla: "Pendiente validación", cubrecamaras: "Mismo diseño S25", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "14", nota: "ZONA E" }
    },

    "Galaxy S25 FE": {
        marca: "Samsung",
        serie: "S25",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED Slim flat", biometria: "Lector en pantalla", detalles: "Edición delgada enfocada en IA" },
        compatibilidades: { pantalla: "S25 FE", cubrecamaras: "S25 FE", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "14", nota: "ZONA E" }
    },

    "Galaxy S25": {
        marca: "Samsung",
        serie: "S25",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED 3X flat", biometria: "Lector ultrasónico v2", detalles: "Funciones nativas de Galaxy AI" },
        compatibilidades: { pantalla: "S25 (Bordes reducidos)", cubrecamaras: "S25", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "26", nota: "ZONA E" }
    },

    "Galaxy S25 Plus": {
        marca: "Samsung",
        serie: "S25",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", tipoPantalla: "Dynamic AMOLED 3X flat", biometria: "Lector ultrasónico v2", detalles: "Diseño ultra delgado" },
        compatibilidades: { pantalla: "S25 Plus", cubrecamaras: "S25 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "14", nota: "ZONA E" }
    },

    "Galaxy S25 Ultra": {
        marca: "Samsung",
        serie: "S25",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "4 Cámaras rediseñadas", tipoPantalla: "Dynamic Flat AMOLED", biometria: "Lector ultrasónico v2", detalles: "Esquinas suavizadas y ergonómicas" },
        compatibilidades: { pantalla: "S25 Ultra (Bordes redondeados)", cubrecamaras: "S25 Ultra", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "2", nota: "ZONA E" }
    },

    "Galaxy S26 EDGE": {
        marca: "Samsung",
        serie: "S26",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "Especificaciones futuras", tipoPantalla: "Pantalla flexible curva", biometria: "Bajo pantalla", detalles: "Lanzamiento proyectado" },
        compatibilidades: { pantalla: "Diseño conceptual", cubrecamaras: "S26", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "25", nota: "ZONA E" }
    },

    "Galaxy S26": {
        marca: "Samsung",
        serie: "S26",
        caracteristicas: { tamano: "Pequeño", puerto: "USB-C", cantCamaras: "Por confirmar", tipoPantalla: "AMOLED Next-Gen", biometria: "Sensor integrado masivo", detalles: "Reserva de espacio en catálogo" },
        compatibilidades: { pantalla: "Por confirmar", cubrecamaras: "Por confirmar", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "25", nota: "ZONA E" }
    },

    "Galaxy S26 Plus": {
        marca: "Samsung",
        serie: "S26",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "Por confirmar", tipoPantalla: "AMOLED Next-Gen", biometria: "Sensor integrado masivo", detalles: "Reserva de espacio en catálogo" },
        compatibilidades: { pantalla: "Por confirmar", cubrecamaras: "Por confirmar", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "13", nota: "ZONA E" }
    },

    "Galaxy S26 Ultra": {
        marca: "Samsung",
        serie: "S26",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "Cámaras con zoom extendido", tipoPantalla: "AMOLED Next-Gen", biometria: "Sensor integrado masivo", detalles: "Buque insignia proyectado" },
        compatibilidades: { pantalla: "Por confirmar", cubrecamaras: "Por confirmar", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "1", nota: "ZONA E" }
    },

    // --- SMARTPHONES PLEGABLES (FLIP) ---

    "Galaxy Flip 3": {
        marca: "Samsung",
        serie: "Flip",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras principales", tipoPantalla: "Plegable Foldable AMOLED", biometria: "Huella lateral", detalles: "Resistencia al agua IPX8 pionera" },
        compatibilidades: { pantalla: "Hidrogel Interno Flip 3", cubrecamaras: "Ninguna", carcasas: "Exclusiva Flip 3 (Dos piezas)" },
        ubicacion: { mueble: "E", numeroCajon: "37", nota: "ZONA E" }
    },

    "Galaxy Flip 4": {
        marca: "Samsung",
        serie: "Flip",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras principales", tipoPantalla: "Plegable UTG mejorado", biometria: "Huella lateral", detalles: "Bisagra más delgada que Flip 3" },
        compatibilidades: { pantalla: "Hidrogel Interno Flip 4", cubrecamaras: "Ninguna", carcasas: "Exclusiva Flip 4 (Dos piezas)" },
        ubicacion: { mueble: "E", numeroCajon: "37", nota: "ZONA E" }
    },

    "Galaxy Flip 5": {
        marca: "Samsung",
        serie: "Flip",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", tipoPantalla: "Plegable + Pantalla externa carpeta", biometria: "Huella lateral", detalles: "Cierre plano total sin hueco" },
        compatibilidades: { pantalla: "Vidrio Externo Carpeta Flip 5 / Hidrogel Interno", cubrecamaras: "Ninguna", carcasas: "Exclusiva Flip 5" },
        ubicacion: { mueble: "E", numeroCajon: "37", nota: "ZONA E" }
    },

    "Galaxy Flip 6": {
        marca: "Samsung",
        serie: "Flip",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras (50MP principal)", tipoPantalla: "Plegable AMOLED brillo alto", biometria: "Huella lateral", detalles: "Cámara mejorada y cámara de vapor" },
        compatibilidades: { pantalla: "Vidrio Externo Flip 6 / Hidrogel Interno", cubrecamaras: "Lentes individuales Flip 6", carcasas: "Exclusiva Flip 6" },
        ubicacion: { mueble: "E", numeroCajon: "37", nota: "ZONA E" }
    },

    "Galaxy Flip 7": {
        marca: "Samsung",
        serie: "Flip",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "Especificaciones futuras", tipoPantalla: "Plegable flexible avanzada", biometria: "Huella lateral/Pantalla", detalles: "Reserva de espacio plegable" },
        compatibilidades: { pantalla: "Por confirmar", cubrecamaras: "Por confirmar", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "37", nota: "ZONA E" }
    },

    // --- SMARTPHONES PLEGABLES (FOLD) ---

    "Galaxy Fold 3": {
        marca: "Samsung",
        serie: "Fold",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 post / 1 ext / 1 oculta", tipoPantalla: "Plegable tipo libro", biometria: "Huella lateral", detalles: "Primera cámara bajo pantalla interna" },
        compatibilidades: { pantalla: "Vidrio Externo Fold 3 / Hidrogel completo", cubrecamaras: "Ninguna", carcasas: "Exclusiva Fold 3" },
        ubicacion: { mueble: "E", numeroCajon: "38", nota: "ZONA E" }
    },

    "Galaxy Fold 4": {
        marca: "Samsung",
        serie: "Fold",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 post / 1 ext / 1 interna", tipoPantalla: "Plegable proporción más ancha", biometria: "Huella lateral", detalles: "Pantalla interna con pliegue optimizado" },
        compatibilidades: { pantalla: "Vidrio Externo Fold 4 / Hidrogel completo", cubrecamaras: "Ninguna", carcasas: "Exclusiva Fold 4" },
        ubicacion: { mueble: "E", numeroCajon: "38", nota: "ZONA E" }
    },

    "Galaxy Fold 5": {
        marca: "Samsung",
        serie: "Fold",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras principales", tipoPantalla: "Foldable Dynamic AMOLED 2X", biometria: "Huella lateral", detalles: "Bisagra Flex que cierra perfecta" },
        compatibilidades: { pantalla: "Vidrio Externo Fold 5", cubrecamaras: "Lentes Fold 5", carcasas: "Exclusiva Fold 5" },
        ubicacion: { mueble: "E", numeroCajon: "38", nota: "ZONA E" }
    },

    "Galaxy Fold 6": {
        marca: "Samsung",
        serie: "Fold",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras principales", tipoPantalla: "Plegable diseño simétrico recto", biometria: "Huella lateral", detalles: "Esquinas rectas y cuerpo más liviano" },
        compatibilidades: { pantalla: "Vidrio Externo Fold 6 (Diseño recto)", cubrecamaras: "Lentes Fold 6", carcasas: "Exclusiva Fold 6" },
        ubicacion: { mueble: "E", numeroCajon: "38", nota: "ZONA E" }
    },

    "Galaxy Fold 7": {
        marca: "Samsung",
        serie: "Fold",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "Especificaciones futuras", tipoPantalla: "Plegable tipo libro avanzada", biometria: "Por confirmar", detalles: "Reserva catálogo plegable grande" },
        compatibilidades: { pantalla: "Por confirmar", cubrecamaras: "Por confirmar", carcasas: "Ninguna" },
        ubicacion: { mueble: "E", numeroCajon: "38", nota: "ZONA E" }
    },

    // 📱 iPhone

    "iPhone 5": {
        marca: "Apple",
        serie: "5", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "XS", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 6": {
        marca: "Apple",
        serie: "6", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7, iPhone 8", cubrecamaras: "iPhone 6 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 6 Plus": {
        marca: "Apple",
        serie: "6", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7 Plus, iPhone 8 Plus", cubrecamaras: "iPhone 6", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 11, nota: "ZONA C"}
    },

    "iPhone 7": {
        marca: "Apple",
        serie: "7", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 8, iPhone SE 2020", cubrecamaras: "Ninguna", carcasas: "iPhone 8, iPhone SE (2020)" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 7 Plus": {
        marca: "Apple",
        serie: "7", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 8 Plus", cubrecamaras: "Ninguna", carcasas: "iPhone 8 Plus" },
        ubicacion: { mueble: "C", numeroCajon: 11, nota: "ZONA C"}
    },

    "iPhone 8": {
        marca: "Apple",
        serie: "8", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7, iPhone SE 2020", cubrecamaras: "iPhone SE 2020", carcasas: "iPhone 7, iPhone SE (2020)" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 8 Plus": {
        marca: "Apple",
        serie: "8", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7 Plus", cubrecamaras: "Ninguna", carcasas: "iPhone 7 Plus" },
        ubicacion: { mueble: "C", numeroCajon: 11, nota: "ZONA C"}
    },
    
    "iPhone X": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone XS, iPhone 11 Pro", cubrecamaras: "Ninguna", carcasas: "iPhone XS" },
        ubicacion: { mueble: "C", numeroCajon: 23, nota: "ZONA C"}
    },

    "iPhone XR": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 11", cubrecamaras: "Ninguna", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 29, nota: "ZONA C"}
    },

    "iPhone XS": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone X, iPhone 11 Pro", cubrecamaras: "iPhone XS Max", carcasas: "iPhone X" },
        ubicacion: { mueble: "C", numeroCajon: 23, nota: "ZONA C"}
    },

    "iPhone XS Max": {
        marca: "Apple",
        serie: "10", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 11 Pro Max", cubrecamaras: "XS", carcasas: "iPhone 11 Pro Max" },
        ubicacion: { mueble: "C", numeroCajon: 20, nota: "ZONA C"}
    },

    "iPhone 11": {
        marca: "Apple",
        serie: "11", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone XR", cubrecamaras: "iPhone 12 Mini, iPhone 12", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "21, 30", nota: "ZONA C"}
    },

    "iPhone 11 Pro": {
        marca: "Apple",
        serie: "11", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone X, iPhone XS", cubrecamaras: "iPhone 11 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 12, nota: "ZONA C"}
    },

    "iPhone 11 Pro Max": {
        marca: "Apple",
        serie: "11", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone XS Max", cubrecamaras: "iPhone 11 Pro", carcasas: "iPhone XS Max" },
        ubicacion: { mueble: "C", numeroCajon: 3, nota: "ZONA C"}
    },

    "iPhone SE 2020": {
        marca: "Apple",
        serie: "9", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "1 Cámara", silenciar: "Switch de Silencio", faceId: "Touch ID", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 7, iPhone 8", cubrecamaras: "iPhone 8", carcasas: "iPhone 7, iPhone 8" },
        ubicacion: { mueble: "C", numeroCajon: 2, nota: "ZONA C"}
    },

    "iPhone 12 Mini": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Pequeño", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Mini", cubrecamaras: "iPhone 11, iPhone 12", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 14, nota: "ZONA C"}
    },

    "iPhone 12": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 12 Pro", cubrecamaras: "iPhone 11, iPhone 12 Mini", carcasas: "iPhone 12 Pro" },
        ubicacion: { mueble: "C", numeroCajon: "4, 13", nota: "ZONA C"}
    },

    "iPhone 12 Pro": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 12", cubrecamaras: "iPhone 12 Pro Max", carcasas: "iPhone 12" },
        ubicacion: { mueble: "C", numeroCajon: "4, 13", nota: "ZONA C"}
    },

    "iPhone 12 Pro Max": {
        marca: "Apple",
        serie: "12", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "iPhone 12 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "22, 31", nota: "ZONA C"}
    },

    "iPhone 13 Mini": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Pequeño", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 12 Mini", cubrecamaras: "iPhone 13, iPhone 14, iPhone 14 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: 5, nota: "ZONA C"}
    },

    "iPhone 13": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Pro, iPhone 14, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Mini, iPhone 14, iPhone 14 Plus", carcasas: "iPhone 14" },
        ubicacion: { mueble: "A", numeroCajon: "1, 7, 14", nota: "ZONA A"}
    },

    "iPhone 13 Pro": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 14, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "20, 27", nota: "ZONA A"}
    },

    "iPhone 13 Pro Max": {
        marca: "Apple",
        serie: "13", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Plus", cubrecamaras: "iPhone 13 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "21, 28", nota: "ZONA A"}
    },

    "iPhone 14": {
        marca: "Apple",
        serie: "14", 
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 13 Pro, iPhone 16e, iPhone 17e", cubrecamaras: "iPhone 13 Mini, iPhone 13, iPhone 14 Plus", carcasas: "iPhone 13" },
        ubicacion: { mueble: "A", numeroCajon: "6, 13", nota: "ZONA A"}
    },

    "iPhone 14 Plus": {
        marca: "Apple",
        serie: "14", 
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13 Pro Max", cubrecamaras: "iPhone 13 Mini, iPhone 13, iPhone 14", carcasas: "iPhone 15 Plus" },
        ubicacion: { mueble: "A", numeroCajon: "4, 11", nota: "ZONA A"}
    },

    "iPhone 14 Pro": {
        marca: "Apple",
        serie: "14",
        caracteristicas: { tamano: "Mediano", puerto: "Lightning", cantCamaras: "3 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "(iPhone 15, iPhone 16(?))", cubrecamaras: "iPhone 14 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "5, 12", nota: "ZONA A"}
    },

    "iPhone 14 Pro Max": {
        marca: "Apple",
        serie: "14",
        caracteristicas: { tamano: "Grande", puerto: "Lightning", cantCamaras: "3 Cámaras + Lidar", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "14 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "19, 26", nota: "ZONA A"}
    },

    "iPhone 15": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 14 Pro(?), iPhone 16", cubrecamaras: "iPhone 15 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "3, 10, 22", nota: "ZONA A"}
    },

    "iPhone 15 Plus": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Switch de Silencio", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 16 Plus", cubrecamaras: "iPhone 15", carcasas: "iPhone 14 Plus" },
        ubicacion: { mueble: "A", numeroCajon: "18, 25", nota: "ZONA A"}
    },

    "iPhone 15 Pro": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "PENDIENTE...", cubrecamaras: "iPhone 15 Pro Max, iPhone 16 Pro/Pro Max, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "2, 9, 15", nota: "ZONA A"}
    },

    "iPhone 15 Pro Max": {
        marca: "Apple",
        serie: "15",
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "Ninguna", cubrecamaras: "iPhone 15 Pro, iPhone 16 Pro/Pro Max, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "8, 17, 24", nota: "ZONA A"}
    },

    "iPhone 16e": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Botón de Acción", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 13 Pro, iPhone 14, iPhone 17e", cubrecamaras: "XS", carcasas: "iPhone 17e" },
        ubicacion: { mueble: "C", numeroCajon: "26, 35", nota: "ZONA C"}
    },

    "iPhone 16": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 15", cubrecamaras: "iPhone 16 Plus, iPhone 17", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "9, 18", nota: "ZONA C"}
    },

    "iPhone 16 Plus": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 15 Plus", cubrecamaras: "iPhone 16, iPhone 17", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "8, 17", nota: "ZONA C"}
    },

    "iPhone 16 Pro": {
        marca: "Apple",
        serie: "16",
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 17, iPhone 17 Pro", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro Max, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "A", numeroCajon: "16, 23", nota: "ZONA A"}
    },

    "iPhone 16 Pro Max": {
        marca: "Apple",
        serie: "16", 
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 17 Pro Max", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro, iPhone 17 Pro/Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "27, 36", nota: "ZONA C"}
    },

    "iPhone 17e": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Botón de Acción", faceId: "Notch Tradicional", controlCamara: "No tiene" },
        compatibilidades: { pantalla: "iPhone 13, iPhone 13 Pro, iPhone 14, iPhone 16e", cubrecamaras: "XS", carcasas: "iPhone 16e" },
        ubicacion: { mueble: "C", numeroCajon: "26, 35", nota: "ZONA C" }
    },

    "iPhone 17": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "2 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 16 Pro, iPhone 17 Pro", cubrecamaras: "iPhone 16, iPhone 16 Plus", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "7, 16", nota: "ZONA C" }
    },

    "iPhone Air": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "1 Cámara", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "XS, 11 Pro", cubrecamaras: "XS", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "25, 34", nota: "ZONA C" }
    },

    "iPhone 17 Pro": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Mediano", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 16 Pro, iPhone 17", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro/Pro Max, iPhone 17 Pro Max", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "5, 14", nota: "ZONA C" }
    },

    "iPhone 17 Pro Max": {
        marca: "Apple",
        serie: "17", 
        caracteristicas: { tamano: "Grande", puerto: "USB-C", cantCamaras: "3 Cámaras", silenciar: "Botón de Acción", faceId: "Isla dinámica", controlCamara: "Si tiene" },
        compatibilidades: { pantalla: "iPhone 16 Pro Max", cubrecamaras: "iPhone 15 Pro/Pro Max, iPhone 16 Pro/Pro Max, iPhone 17 Pro", carcasas: "Ninguna" },
        ubicacion: { mueble: "C", numeroCajon: "24, 33", nota: "ZONA C" }
    },

};

// =======================================================
// 🔄 ACOPLAMIENTO DE EDICIÓN, CREACIÓN Y ELIMINACIÓN LOCAL
// =======================================================
try {
    // 1. Aplicar altas y modificaciones
    const almacenados = JSON.parse(localStorage.getItem('bd_casedex_locales'));
    if (almacenados) {
        Object.assign(bdInventario, almacenados);
    }

    // 2. Aplicar bajas (Lista negra de eliminados)
    const eliminados = JSON.parse(localStorage.getItem('bd_casedex_eliminados'));
    if (eliminados && Array.isArray(eliminados)) {
        eliminados.forEach(modelo => {
            if (bdInventario[modelo]) {
                delete bdInventario[modelo];
            }
        });
    }
} catch (e) {
    console.error("Error en la sincronización del almacenamiento local:", e);
}