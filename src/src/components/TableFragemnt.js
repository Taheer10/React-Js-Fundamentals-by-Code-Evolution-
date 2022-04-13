import React from 'react'
import ColumnFragment from './ColumnFragment'

function TableFragemnt() {
  return (
    <table>
        <tbody>
            <tr>
                <ColumnFragment/>
            </tr>
        </tbody>
    </table>
  )
}

export default TableFragemnt