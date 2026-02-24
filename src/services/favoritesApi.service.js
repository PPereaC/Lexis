import ApiService from './api.service.js';

// Servicio de favoritos con API REST y JWT
class FavoritesApiService {
  // POST /api/favorites - Añadir a favoritos
  static async addFavorite(game) {
    try {
      const data = await ApiService.post('/favorites', {
        gameId: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
        released: game.released
      });

      return {
        success: true,
        favorite: data.favorite
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // GET /api/favorites - Obtener favoritos del usuario
  static async getFavorites() {
    try {
      const data = await ApiService.get('/favorites');
      return {
        success: true,
        favorites: data.favorites || []
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        favorites: []
      };
    }
  }

  // GET /api/favorites/:gameId - Verificar si un juego es favorito
  static async isFavorite(gameId) {
    try {
      const data = await ApiService.get(`/favorites/${gameId}`);
      return {
        success: true,
        isFavorite: data.isFavorite
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        isFavorite: false
      };
    }
  }

  // DELETE /api/favorites/:gameId - Eliminar de favoritos
  static async removeFavorite(gameId) {
    try {
      await ApiService.delete(`/favorites/${gameId}`);
      return {
        success: true
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default FavoritesApiService;
