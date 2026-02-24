import ApiService from './api.service.js';

// Servicio de estadísticas para admin
class StatsApiService {
  // GET /api/stats - Obtener estadísticas del sistema
  static async getStats() {
    try {
      const data = await ApiService.get('/stats');
      return {
        success: true,
        stats: data
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        stats: null
      };
    }
  }
}

export default StatsApiService;
