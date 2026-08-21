import React from 'react'

export default function PwaStatusBanner({ message, actionLabel, onAction, onClose }) {
  if (!message) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 16,
      left: 16,
      right: 16,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 12,
      backgroundColor: '#6D3A8A',
      color: '#fff',
      fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
      fontSize: 14,
      lineHeight: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    }}>
      <span style={{ flex: 1, textAlign: 'center' }}>{message}</span>
      {actionLabel && onAction && (
        <button onClick={onAction} style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          border: 'none',
          borderRadius: 8,
          color: '#fff',
          padding: '6px 12px',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
        }}>{actionLabel}</button>
      )}
      {onClose && (
        <button onClick={onClose} aria-label="Close" style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#fff',
          fontSize: 18,
          lineHeight: 1,
          padding: '4px 8px',
          cursor: 'pointer',
        }}>×</button>
      )}
    </div>
  )
}
