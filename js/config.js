/**
 * Configuration Module
 *
 * Centralized configuration for the frontend application
 * IMPORTANT: All API calls MUST use API_BASE constant
 */

// Backend API base URL (Railway deployment)
const API_BASE = "https://nodejs-production-e51c.up.railway.app";

// Export for use in other modules
window.API_CONFIG = {
    API_BASE: API_BASE
};
