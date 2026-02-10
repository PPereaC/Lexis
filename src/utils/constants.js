/**
 * Constantes generales de la aplicación
*/

// Orden de juegos
export const ORDER_OPTIONS = {
    RELEVANCE: '',
    NAME: 'name',
    RELEASED: '-released',
    ADDED: '-added',
    CREATED: '-created',
    UPDATED: '-updated',
    RATING: '-rating',
    METACRITIC: '-metacritic',
};

// Tamaños de página
export const PAGE_SIZES = {
    SMALL: 10,
    MEDIUM: 20,
    LARGE: 40,
};

// Estados de carga
export const LOADING_STATES = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

// Mensajes de error
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
    API_ERROR: 'Error al cargar los datos. Intenta de nuevo.',
    NOT_FOUND: 'No se encontraron resultados.',
    INVALID_API_KEY: 'API Key inválida o no configurada.',
};
