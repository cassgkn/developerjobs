import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { StyledUl } from './ListaVagas'

type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisicao: string[]
}

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Frontend',
    localizacao: 'Remoto',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4500,
    requisicao: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJs',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 5000,
    salarioMax: 6500,
    requisicao: ['HTML', 'CSS', 'JavaScript', 'NodeJs']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor FullStack',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 4000,
    salarioMax: 6000,
    requisicao: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Desenvolvedor de Interfaces',
    localizacao: 'Remoto',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 6500,
    requisicao: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Frontend',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'CLT',
    salarioMin: 7000,
    salarioMax: 9500,
    requisicao: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor Frontend p/ Projetos Internacional',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'CLT',
    salarioMin: 12000,
    salarioMax: 15500,
    requisicao: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor Backend',
    localizacao: 'Presencial',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5500,
    requisicao: ['SQL', 'API', 'Java', 'Docker']
  },
  {
    id: 8,
    titulo: 'Desenvolvedor Backend',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'PJ',
    salarioMin: 12000,
    salarioMax: 15500,
    requisicao: ['SQL', 'AWS', 'Java', 'Docker']
  },
  {
    id: 9,
    titulo: 'Desenvolvedor Java',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'PJ',
    salarioMin: 12000,
    salarioMax: 15500,
    requisicao: ['SQL', 'AWS', 'Java', 'Docker']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((vag) => {
    const termoLowerCase = filtro.toLocaleLowerCase()

    // Verificar se o termo de pesquisa está presente em qualquer propriedade da vaga
    return (
      vag.titulo.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.localizacao.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.nivel.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.modalidade.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.requisicao.some((req) =>
        req.toLocaleLowerCase().includes(termoLowerCase)
      )
    )
  })

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <StyledUl>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisicao}
          />
        ))}
      </StyledUl>
    </div>
  )
}

export default ListaVagas
