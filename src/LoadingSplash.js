import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingSplash: tela de loading inicial com spinner, logo e nome.
 * Acessível para leitores de tela.
 */
function LoadingSplash({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white"
          style={{ zIndex: 2000 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          role="status"
          aria-label="Carregando conteúdo do site"
        >
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="Logo UnityMoz"
            style={{ width: 72, height: 72, marginBottom: 16, objectFit: 'cover', border: '3px solid #e10600' }}
            className="mb-3 rounded-circle"
          />
          <div className="spinner-border text-danger mb-3" style={{ width: 48, height: 48 }} role="status" aria-hidden="true"></div>
          <span className="fw-bold text-danger fs-4">UnityMoz</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingSplash; 