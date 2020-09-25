import React from 'react'
import generatePDF from 'library/generatePDF';

export default function GeneratePDF() {
  return (
    <button onClick={ generatePDF }>Generate</button>
  )
}
