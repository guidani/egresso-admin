import Link from 'next/link'
import React from 'react'

export default function BreadcumbsRelatorios() {
  return (
    <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href={"/"}>Início</Link>
            </li>
            <li>Relatórios</li>
          </ul>
        </div>
  )
}
