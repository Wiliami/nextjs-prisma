



// const nome = 'Wiliamis Oliveira'

// Scope chain
 function retornarNome() {
    return nome; // Scopo local 
 }

//  console.log(retornarNome())


//  var nome;
 // Escopo de função
 // Redeclação
 // Hoisting

//  function testDeclaration() {
//     console.log('Teste function declaration')
//  }

//  searchUsers() // somente a variável testExpression sofre hoisting
//  var testExpression = function() {
//     console.log('Function expresssion') // somente a variável testExpression sofre hoisting
//  }


'use client'

import { useState } from 'react'
import { FormProvider } from "react-hook-form"

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('profile')

    {activeTab === 'profile' && (
        /* render tab profile */
        /* <h1>Profile Tab</h1> */
    )}
}
