/**
 * Funciones auxiliares para la aplicación
*/

/**
 * Construir query string desde un objeto
 * @param {Object} params - Parámetros del query
 * @returns {string} Query string formateado
*/
export const buildQueryString = (params) => {
    const filteredParams = Object.entries(params)
        .filter(([_, value]) => value !== null && value !== undefined && value !== '')
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);

    return filteredParams.length > 0 ? `?${filteredParams.join('&')}` : '';
};

/**
 * Formatear fecha a formato legible
 * @param {string} dateString - Fecha en formato ISO
 * @returns {string} Fecha formateada
*/
export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';

    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

/**
 * Truncar texto a un número específico de palabras
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
*/
export const truncateText = (text, maxLength = 100) => {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

/**
 * Debounce para búsquedas
 * @param {Function} func - Función a ejecutar
 * @param {number} delay - Tiempo de espera en ms
 * @returns {Function} Función con debounce
*/
export const debounce = (func, delay = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};
