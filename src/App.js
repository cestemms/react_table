import React from 'react';
import Table from './components/Table'


function App() {

  const data = [
    { id: 1, 
      beneficiario: 'RALF CORREA DELAMURA',
      titular: 'RALF CORREA DELAMURA',
      status: 'ATIVO', 
      sexo: 'M',
      titularidade: 'Titular',
      plano: 'Plano',
      idade: 32,
      consultas: 22,
      exames: 26,
      internacoes: 5,
      custo: 236525.59,
      especialidades: 'Imunologia'
    },
    { id: 2, 
      beneficiario: 'RALF CORREA DELAMURA',
      titular: 'RALF CORREA DELAMURA',
      status: 'ATIVO', 
      sexo: 'M',
      titularidade: 'Titular',
      plano: 'Plano',
      idade: 32,
      consultas: 22,
      exames: 26,
      internacoes: 5,
      custo: 236525.59,
      especialidades: 'Imunologia'
    },
    { id: 3, 
      beneficiario: 'RALF CORREA DELAMURA',
      titular: 'RALF CORREA DELAMURA',
      status: 'ATIVO', 
      sexo: 'M',
      titularidade: 'Titular',
      plano: 'Plano',
      idade: 32,
      consultas: 22,
      exames: 26,
      internacoes: 5,
      custo: 236525.59,
      especialidades: 'Imunologia'
    },
    { id: 4, 
      beneficiario: 'RALF CORREA DELAMURA',
      titular: 'RALF CORREA DELAMURA',
      status: 'ATIVO', 
      sexo: 'M',
      titularidade: 'Dependente',
      plano: 'Plano',
      idade: 32,
      consultas: 22,
      exames: 26,
      internacoes: 5,
      custo: 236525.59,
      especialidades: 'Imunologia'
    },
  ]

  const head = {
      id: 'ID', 
      beneficiario: 'Pessoa/Titular',
      titular: 'Titular',
      status: 'Status', 
      sexo: 'Sexo',
      titularidade: 'Titularidade',
      plano: 'Plano',
      idade: 'Idade',
      consultas: 'Consultas',
      exames: 'Exames',
      internacoes: 'Internações',
      custo: 'Custo',
      especialidades: 'Especialidades',
  }
  
  return (
    <div>
      <Table data={data} head={head}/>
    </div>
  );
}

export default App;
