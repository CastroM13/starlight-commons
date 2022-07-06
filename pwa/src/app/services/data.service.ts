import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
export interface News {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public news: News[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor(private http: HttpClient) { }

  public getNews(id): Observable<any> {
    return this.http.get<any[]>(`${environment.API_URL}/news/${id}`);
  }

  public getNewsById(id: number): News {
    return this.news[id];
  }

  merge(obj) {
      return [].concat.apply([], Object.keys(obj).map(_ => {obj[_].map(e => e.origin = _); return obj[_]}))
  }

  public getTopics() {
    return this.merge({
      'Jovem Nerd': [
        {
          id: 'nerdbunker',
          name: 'Nerdbunker',
          url: 'https://jovemnerd.com.br/feed/'
        },
        {
          id: 'nerdcast',
          name: 'Nerdcast',
          url: 'https://jovemnerd.com.br/feed-nerdcast/'
        },
      ],
      'Adrenalin': [
        {
          id: 'adrenaline',
          name: 'Adrenaline',
          url: 'https://adrenaline.com.br/rss'
        },
      ],
      'Nyaa': [
        {
          id: 'nyaa',
          name: 'Nyaa Animes',
          url: 'https://nyaa.si/?page=rss'
        },
      ],
      'G1': [
        {
          id: 'g1-brasil',
          name: 'Brasil',
          url: 'https://g1.globo.com/rss/g1/brasil'
        },
        {
          id: 'g1-carros',
          name: 'Carros (Autoesporte.com)',
          url: 'https://g1.globo.com/rss/g1/carros'
        },
        {
          id: 'g1-ciencia-e-saude',
          name: 'Ciência e Saúde',
          url: 'https://g1.globo.com/rss/g1/ciencia-e-saude'
        },
        {
          id: 'g1-concursos-e-emprego',
          name: 'Concursos e Emprego',
          url: 'https://g1.globo.com/rss/g1/concursos-e-emprego'
        },
        {
          id: 'g1-economia',
          name: 'Economia',
          url: 'https://g1.globo.com/rss/g1/economia'
        },
        {
          id: 'g1-educacao',
          name: 'Educação',
          url: 'https://g1.globo.com/rss/g1/educacao'
        },
        {
          id: 'g1-loterias',
          name: 'Loterias',
          url: 'https://g1.globo.com/rss/g1/loterias'
        },
        {
          id: 'g1-mundo',
          name: 'Mundo',
          url: 'https://g1.globo.com/rss/g1/mundo'
        },
        {
          id: 'g1-musica',
          name: 'Música',
          url: 'https://g1.globo.com/rss/g1/musica'
        },
        {
          id: 'g1-natureza',
          name: 'Natureza',
          url: 'https://g1.globo.com/rss/g1/natureza'
        },
        {
          id: 'g1-planeta-bizarro',
          name: 'Planeta Bizarro',
          url: 'https://g1.globo.com/rss/g1/planeta-bizarro'
        },
        {
          id: 'g1-politica-mensalao',
          name: 'Política',
          url: 'https://g1.globo.com/rss/g1/politica/mensalao'
        },
        {
          id: 'g1-pop-arte',
          name: 'Pop & Arte',
          url: 'https://g1.globo.com/rss/g1/pop-arte'
        },
        {
          id: 'g1-tecnologia',
          name: 'Tecnologia e Games',
          url: 'https://g1.globo.com/rss/g1/tecnologia'
        },
        {
          id: 'g1-turismo-e-viagem',
          name: 'Turismo e Viagem',
          url: 'https://g1.globo.com/rss/g1/turismo-e-viagem'
        },
        {
          id: 'g1-ac-acre',
          name: 'Acre',
          url: 'https://g1.globo.com/rss/g1/ac/acre'
        },
        {
          id: 'g1-al-alagoas',
          name: 'Alagoas',
          url: 'https://g1.globo.com/rss/g1/al/alagoas'
        },
        {
          id: 'g1-ap-amapa',
          name: 'Amapá',
          url: 'https://g1.globo.com/rss/g1/ap/amapa'
        },
        {
          id: 'g1-am-amazonas',
          name: 'Amazonas',
          url: 'https://g1.globo.com/rss/g1/am/amazonas'
        },
        {
          id: 'g1-bahia',
          name: 'Bahia',
          url: 'https://g1.globo.com/rss/g1/bahia'
        },
        {
          id: 'g1-ceara',
          name: 'Ceará',
          url: 'https://g1.globo.com/rss/g1/ceara'
        },
        {
          id: 'g1-distrito-federal',
          name: 'Distrito Federal',
          url: 'https://g1.globo.com/rss/g1/distrito-federal'
        },
        {
          id: 'g1-espirito-santo',
          name: 'Espírito Santo',
          url: 'https://g1.globo.com/rss/g1/espirito-santo'
        },
        {
          id: 'g1-goias',
          name: 'Goiás',
          url: 'https://g1.globo.com/rss/g1/goias'
        },
        {
          id: 'g1-ma-maranhao',
          name: 'Maranhão',
          url: 'https://g1.globo.com/rss/g1/ma/maranhao'
        },
        {
          id: 'g1-mato-grosso',
          name: 'Mato Grosso',
          url: 'https://g1.globo.com/rss/g1/mato-grosso'
        },
        {
          id: 'g1-mato-grosso-do-sul',
          name: 'Mato Grosso do Sul',
          url: 'https://g1.globo.com/rss/g1/mato-grosso-do-sul'
        },
        {
          id: 'g1-minas-gerais',
          name: 'Minas Gerais',
          url: 'https://g1.globo.com/rss/g1/minas-gerais'
        },
        {
          id: 'g1-mg-centro-oeste',
          name: 'MG - Centro-Oeste',
          url: 'https://g1.globo.com/rss/g1/mg/centro-oeste'
        },
        {
          id: 'g1-mg-grande-minas',
          name: 'MG - Grande Minas',
          url: 'https://g1.globo.com/rss/g1/mg/grande-minas'
        },
        {
          id: 'g1-mg-sul-de-minas',
          name: 'MG - Sul de Minas',
          url: 'https://g1.globo.com/rss/g1/mg/sul-de-minas'
        },
        {
          id: 'g1-minas-gerais-triangulo-mineiro',
          name: 'MG - Triângulo Mineiro',
          url: 'https://g1.globo.com/rss/g1/minas-gerais/triangulo-mineiro'
        },
        {
          id: 'g1-mg-vales-mg',
          name: 'MG - Vales de Minas Gerais',
          url: 'https://g1.globo.com/rss/g1/mg/vales-mg'
        },
        {
          id: 'g1-mg-zona-da-mata',
          name: 'MG - Zona da Mat',
          url: 'https://g1.globo.com/rss/g1/mg/zona-da-mata'
        },
        {
          id: 'g1-pa-para',
          name: 'Pará',
          url: 'https://g1.globo.com/rss/g1/pa/para'
        },
        {
          id: 'g1-pb-paraiba',
          name: 'Paraíba',
          url: 'https://g1.globo.com/rss/g1/pb/paraiba'
        },
        {
          id: 'g1-pr-parana',
          name: 'Paraná',
          url: 'https://g1.globo.com/rss/g1/pr/parana'
        },
        {
          id: 'g1-pr-campos-gerais-sul',
          name: 'PR - Campos Gerais e Sul',
          url: 'https://g1.globo.com/rss/g1/pr/campos-gerais-sul'
        },
        {
          id: 'g1-pr-oeste-sudoeste',
          name: 'PR - Oeste e Sudoeste',
          url: 'https://g1.globo.com/rss/g1/pr/oeste-sudoeste'
        },
        {
          id: 'g1-pr-norte-noroeste',
          name: 'PR - Norte e Noroeste',
          url: 'https://g1.globo.com/rss/g1/pr/norte-noroeste'
        },
        {
          id: 'g1-pernambuco',
          name: 'Pernambuco',
          url: 'https://g1.globo.com/rss/g1/pernambuco'
        },
        {
          id: 'g1-pe-caruaru-regiao',
          name: 'PE - Caruaru e Região',
          url: 'https://g1.globo.com/rss/g1/pe/caruaru-regiao'
        },
        {
          id: 'g1-pe-petrolina-regiao',
          name: 'PE - Petrolina e Regiã',
          url: 'https://g1.globo.com/rss/g1/pe/petrolina-regiao'
        },
        {
          id: 'g1-rio-de-janeiro',
          name: 'Rio de Janeiro',
          url: 'https://g1.globo.com/rss/g1/rio-de-janeiro'
        },
        {
          id: 'g1-rj-regiao-serrana',
          name: 'RJ - Região Serrana',
          url: 'https://g1.globo.com/rss/g1/rj/regiao-serrana'
        },
        {
          id: 'g1-rj-regiao-dos-lagos',
          name: 'RJ - Região dos Lagos',
          url: 'https://g1.globo.com/rss/g1/rj/regiao-dos-lagos'
        },
        {
          id: 'g1-rj-norte-fluminense',
          name: 'RJ - Norte Fluminense',
          url: 'https://g1.globo.com/rss/g1/rj/norte-fluminense'
        },
        {
          id: 'g1-rj-sul-do-rio-costa-verde',
          name: 'RJ - Sul e Costa Verde',
          url: 'https://g1.globo.com/rss/g1/rj/sul-do-rio-costa-verde'
        },
        {
          id: 'g1-rn-rio-grande-do-norte',
          name: 'Rio Grande do Norte',
          url: 'https://g1.globo.com/rss/g1/rn/rio-grande-do-norte'
        },
        {
          id: 'g1-rs-rio-grande-do-sul',
          name: 'Rio Grande do Sul',
          url: 'https://g1.globo.com/rss/g1/rs/rio-grande-do-sul'
        },
        {
          id: 'g1-ro-rondonia',
          name: 'Rondônia',
          url: 'https://g1.globo.com/rss/g1/ro/rondonia'
        },
        {
          id: 'g1-rr-roraima',
          name: 'Roraima',
          url: 'https://g1.globo.com/rss/g1/rr/roraima'
        },
        {
          id: 'g1-sc-santa-catarina',
          name: 'Santa Catarina',
          url: 'https://g1.globo.com/rss/g1/sc/santa-catarina'
        },
        {
          id: 'g1-sao-paulo',
          name: 'São Paulo',
          url: 'https://g1.globo.com/rss/g1/sao-paulo'
        },
        {
          id: 'g1-sp-bauru-marilia',
          name: 'SP - Bauru e Marília',
          url: 'https://g1.globo.com/rss/g1/sp/bauru-marilia'
        },
        {
          id: 'g1-sp-campinas-regiao',
          name: 'SP - Campinas e região',
          url: 'https://g1.globo.com/rss/g1/sp/campinas-regiao'
        },
        {
          id: 'g1-sao-paulo-itapetininga-regiao',
          name: 'SP - Itapetininga e região',
          url: 'https://g1.globo.com/rss/g1/sao-paulo/itapetininga-regiao'
        },
        {
          id: 'g1-sp-mogi-das-cruzes-suzano',
          name: 'SP - Mogi das Cruzes e Suzano',
          url: 'https://g1.globo.com/rss/g1/sp/mogi-das-cruzes-suzano'
        },
        {
          id: 'g1-sp-piracicaba-regiao',
          name: 'SP - Piracicaba e região',
          url: 'https://g1.globo.com/rss/g1/sp/piracicaba-regiao'
        },
        {
          id: 'g1-sp-presidente-prudente-regiao',
          name: 'SP - Prudente e região',
          url: 'https://g1.globo.com/rss/g1/sp/presidente-prudente-regiao'
        },
        {
          id: 'g1-sp-ribeirao-preto-franca',
          name: 'SP - Ribeirão Preto e Franca',
          url: 'https://g1.globo.com/rss/g1/sp/ribeirao-preto-franca'
        },
        {
          id: 'g1-sao-paulo-sao-jose-do-rio-preto-aracatuba',
          name: 'SP - Rio Preto e Araçatuba',
          url: 'https://g1.globo.com/rss/g1/sao-paulo/sao-jose-do-rio-preto-aracatuba'
        },
        {
          id: 'g1-sp-santos-regiao',
          name: 'SP - Santos e Região',
          url: 'https://g1.globo.com/rss/g1/sp/santos-regiao'
        },
        {
          id: 'g1-sp-sao-carlos-regiao',
          name: 'SP - São Carlos e Araraquara',
          url: 'https://g1.globo.com/rss/g1/sp/sao-carlos-regiao'
        },
        {
          id: 'g1-sao-paulo-sorocaba-jundiai',
          name: 'SP - Sorocaba e Jundiaí',
          url: 'https://g1.globo.com/rss/g1/sao-paulo/sorocaba-jundiai'
        },
        {
          id: 'g1-sp-vale-do-paraiba-regiao',
          name: 'SP - Vale do Paraíba e região',
          url: 'https://g1.globo.com/rss/g1/sp/vale-do-paraiba-regiao'
        },
        {
          id: 'g1-se-sergipe',
          name: 'Sergipe',
          url: 'https://g1.globo.com/rss/g1/se/sergipe'
        },
        {
          id: 'g1-to-tocantins',
          name: 'Tocantins',
          url: 'https://g1.globo.com/rss/g1/to/tocantins'
        },
        {
          id: 'g1-vc-no-g1',
          name: 'VC no G1',
          url: 'https://g1.globo.com/rss/g1/vc-no-g1'
        },
      ],
      'Record': [
        {
          "id": "r7-noticias.r7.com",
          "name": "Notícias",
          "url": "http://noticias.r7.com/feed.xml"
        },
        {
          "id": "r7-politica",
          "name": "Política",
          "url": "https://noticias.r7.com/politica/feed.xml"
        },
        {
          "id": "r7-economia",
          "name": "Economia",
          "url": "https://noticias.r7.com/economia/feed.xml"
        },
        {
          "id": "r7-economize",
          "name": "Economize",
          "url": "https://noticias.r7.com/economia/economize/feed.xml"
        },
        {
          "id": "r7-imposto-de-renda",
          "name": "Imposto de Renda",
          "url": "https://noticias.r7.com/economia/imposto-de-renda/feed.xml"
        },
        {
          "id": "r7-internacional",
          "name": "Internacional",
          "url": "https://noticias.r7.com/internacional/feed.xml"
        },
        {
          "id": "r7-resumo-r7",
          "name": "Resumo R7",
          "url": "https://noticias.r7.com/resumo-r7/feed.xml"
        },
        {
          "id": "r7-tecnologia-e-ciencia",
          "name": "Tecnologia e Ciência",
          "url": "https://noticias.r7.com/tecnologia-e-ciencia/feed.xml"
        },
        {
          "id": "r7-saude",
          "name": "Saúde",
          "url": "https://noticias.r7.com/saude/feed.xml"
        },
        {
          "id": "r7-agronegocios",
          "name": "Agronegócios",
          "url": "https://noticias.r7.com/agronegocios/feed.xml"
        },
        {
          "id": "r7-educacao",
          "name": "Educação",
          "url": "https://noticias.r7.com/educacao/feed.xml"
        },
        {
          "id": "r7-r7-ensina",
          "name": "R7 Ensina",
          "url": "https://noticias.r7.com/educacao/r7-ensina/feed.xml"
        },
        {
          "id": "r7-hora-7",
          "name": "Hora 7",
          "url": "https://noticias.r7.com/hora-7/feed.xml"
        },
        {
          "id": "r7-carros",
          "name": "Carros",
          "url": "https://noticias.r7.com/carros/feed.xml"
        },
        {
          "id": "r7-concursos",
          "name": "Concursos",
          "url": "https://noticias.r7.com/concursos/feed.xml"
        },
        {
          "id": "r7-cidades",
          "name": "Cidades",
          "url": "https://noticias.r7.com/cidades/feed.xml"
        },
        {
          "id": "r7-brasil",
          "name": "",
          "url": "https://noticias.r7.com/brasil/feed.xml"
        },
        {
          "id": "r7-brasilia",
          "name": "Brasília",
          "url": "https://noticias.r7.com/brasilia/feed.xml"
        },
        {
          "id": "r7-sao-paulo",
          "name": "São Paulo",
          "url": "https://noticias.r7.com/sao-paulo/feed.xml"
        },
        {
          "id": "r7-rio-de-janeiro",
          "name": "Rio de Janeiro",
          "url": "https://noticias.r7.com/rio-de-janeiro/feed.xml"
        },
        {
          "id": "r7-minas-gerais",
          "name": "Minas Gerais",
          "url": "https://noticias.r7.com/minas-gerais/feed.xml"
        },
        {
          "id": "r7-pernambuco",
          "name": "Pernambuco",
          "url": "https://noticias.r7.com/pernambuco/feed.xml"
        },
        {
          "id": "r7-monitor7.r7.com",
          "name": "Monitor R7",
          "url": "https://monitor7.r7.com/feed.xml"
        },
        {
          "id": "r7-entretenimento.r7.com",
          "name": "Entretenimento",
          "url": "https://entretenimento.r7.com/feed.xml"
        },
        {
          "id": "r7-cinema-e-series",
          "name": "Cinema e Séries",
          "url": "https://entretenimento.r7.com/cinema-e-series/feed.xml"
        },
        {
          "id": "r7-famosos-e-tv",
          "name": "Famosos e TV",
          "url": "https://entretenimento.r7.com/famosos-e-tv/feed.xml"
        },
        {
          "id": "r7-games",
          "name": "Games",
          "url": "https://entretenimento.r7.com/games/feed.xml"
        },
        {
          "id": "r7-musica",
          "name": "Música",
          "url": "https://entretenimento.r7.com/musica/feed.xml"
        },
        {
          "id": "r7-trilha-de-sexta-2",
          "name": "Trilha do Nosso Jeito",
          "url": "https://entretenimento.r7.com/musica/trilha-de-sexta-2/feed.xml"
        },
        {
          "id": "r7-viagens",
          "name": "Viagens",
          "url": "https://entretenimento.r7.com/viagens/feed.xml"
        },
        {
          "id": "r7-lifestyle.r7.com",
          "name": "Lifestyle",
          "url": "https://lifestyle.r7.com/feed.xml"
        },
        {
          "id": "r7-beleza",
          "name": "Beleza",
          "url": "https://lifestyle.r7.com/beleza/feed.xml"
        },
        {
          "id": "r7-bem-estar",
          "name": "Bem Estar",
          "url": "https://lifestyle.r7.com/bem-estar/feed.xml"
        },
        {
          "id": "r7-bichos",
          "name": "Bichos",
          "url": "https://lifestyle.r7.com/bichos/feed.xml"
        },
        {
          "id": "r7-casa-e-decoracao",
          "name": "Casa e Decoração",
          "url": "https://lifestyle.r7.com/casa-e-decoracao/feed.xml"
        },
        {
          "id": "r7-comidas",
          "name": "Comidas",
          "url": "https://lifestyle.r7.com/comidas/feed.xml"
        },
        {
          "id": "r7-amparo-e-tranquilidade-com-grupo-zelo",
          "name": "Amparo e Tranquilidade com Grupo Zelo",
          "url": "https://noticias.r7.com/minas-gerais/amparo-e-tranquilidade-com-grupo-zelo/feed.xml"
        },
        {
          "id": "r7-cuidando-da-imunidade",
          "name": "Cuidando da Imunidade",
          "url": "https://lifestyle.r7.com/cuidando-da-imunidade/feed.xml"
        },
        {
          "id": "r7-de-bem-com-a-pele-com-asepxia",
          "name": "De bem com a pele com ASEPXIA",
          "url": "https://lifestyle.r7.com/beleza/de-bem-com-a-pele-com-asepxia/feed.xml"
        },
        {
          "id": "r7-dietas",
          "name": "Dietas",
          "url": "https://lifestyle.r7.com/dietas/feed.xml"
        },
        {
          "id": "r7-equilibrio-para-uma-vida-mais-saudavel",
          "name": "Equilíbrio para uma vida mais saudável",
          "url": "https://lifestyle.r7.com/equilibrio-para-uma-vida-mais-saudavel/feed.xml"
        },
        {
          "id": "r7-filhos",
          "name": "Filhos",
          "url": "https://lifestyle.r7.com/filhos/feed.xml"
        },
        {
          "id": "r7-moda",
          "name": "Moda",
          "url": "https://lifestyle.r7.com/moda/feed.xml"
        },
        {
          "id": "r7-esportes.r7.com",
          "name": "Esportes",
          "url": "https://esportes.r7.com/feed.xml"
        },
        {
          "id": "r7-campeonato-carioca",
          "name": "Campeonato Carioca",
          "url": "https://esportes.r7.com/futebol/campeonato-carioca/feed.xml"
        },
        {
          "id": "r7-automobilismo",
          "name": "Automobilismo",
          "url": "https://esportes.r7.com/automobilismo/feed.xml"
        },
        {
          "id": "r7-e-sports",
          "name": "E-Sports",
          "url": "https://esportes.r7.com/e-sports/feed.xml"
        },
        {
          "id": "r7-olimpiadas",
          "name": "Olimpíadas",
          "url": "https://esportes.r7.com/olimpiadas/feed.xml"
        },
        {
          "id": "r7-fora-de-jogo",
          "name": "Fora de Jogo",
          "url": "https://esportes.r7.com/fora-de-jogo/feed.xml"
        },
        {
          "id": "r7-futebol",
          "name": "Futebol",
          "url": "https://esportes.r7.com/futebol/feed.xml"
        },
        {
          "id": "r7-lance",
          "name": "Lance",
          "url": "https://esportes.r7.com/lance/feed.xml"
        },
        {
          "id": "r7-mais-esportes",
          "name": "Mais Esportes",
          "url": "https://esportes.r7.com/mais-esportes/feed.xml"
        },
        {
          "id": "r7-recordtv.r7.com",
          "name": "Record TV",
          "url": "https://recordtv.r7.com/feed.xml"
        },
        {
          "id": "r7-programacao",
          "name": "Programação",
          "url": "https://recordtv.r7.com/programacao/feed.xml"
        },
        {
          "id": "r7-recordtv-emissoras",
          "name": "Emissoras",
          "url": "https://recordtv.r7.com/recordtv-emissoras/feed.xml"
        },
        {
          "id": "r7-radio-sociedade",
          "name": "Rádio Sociedade",
          "url": "https://sociedadeonline.com/feed/"
        },
        {
          "id": "r7-tv-americas",
          "name": "Record TV Américas",
          "url": "https://www.recordtvamericas.com/feed/"
        },
        {
          "id": "r7-record-europa",
          "name": "RecordTV Europa",
          "url": "https://recordtv.r7.com/record-europa/feed.xml"
        },
        {
          "id": "r7-recordtv-interior-sp",
          "name": "RecordTV Interior SP",
          "url": "https://recordtv.r7.com/recordtv-interior-sp/feed.xml"
        },
        {
          "id": "r7-tv-japao",
          "name": "Record TV Japão",
          "url": "https://tv.recordjp.com/index.php/feed/"
        },
        {
          "id": "r7-record-tv-litoral-e-vale",
          "name": "RecordTV Litoral e Vale",
          "url": "https://recordtv.r7.com/record-tv-litoral-e-vale/feed.xml"
        },
        {
          "id": "r7-balanco-geral",
          "name": "Balanço Geral",
          "url": "https://recordtv.r7.com/balanco-geral/feed.xml"
        },
        {
          "id": "r7-balanco-geral-manha",
          "name": "Balanço Geral - Manhã",
          "url": "https://recordtv.r7.com/balanco-geral-manha/feed.xml"
        },
        {
          "id": "r7-camera-record",
          "name": "Câmera Record",
          "url": "https://recordtv.r7.com/camera-record/feed.xml"
        },
        {
          "id": "r7-cidade-alerta",
          "name": "Cidade Alerta",
          "url": "https://recordtv.r7.com/cidade-alerta/feed.xml"
        },
        {
          "id": "r7-domingo-espetacular",
          "name": "Domingo Espetacular",
          "url": "https://recordtv.r7.com/domingo-espetacular/feed.xml"
        },
        {
          "id": "r7-esporte-fantastico",
          "name": "Esporte Fantástico",
          "url": "https://recordtv.r7.com/esporte-fantastico/feed.xml"
        },
        {
          "id": "r7-fala-brasil",
          "name": "Fala Brasil",
          "url": "https://recordtv.r7.com/fala-brasil/feed.xml"
        },
        {
          "id": "r7-noticias.r7.com",
          "name": "Jornal da Record",
          "url": "https://noticias.r7.com/feed.xml"
        },
        {
          "id": "r7-record-news",
          "name": "Record News",
          "url": "https://noticias.r7.com/record-news/feed.xml"
        },
        {
          "id": "r7-a-fazenda-13",
          "name": "A Fazenda 13",
          "url": "https://afazenda.r7.com/a-fazenda-13/feed.xml"
        },
        {
          "id": "r7-canta-comigo-teen-2",
          "name": "Canta Comigo Teen 2",
          "url": "https://recordtv.r7.com/canta-comigo-teen-2/feed.xml"
        },
        {
          "id": "r7-espaco-artesanal-eisenbahn",
          "name": "Espaço Artesanal Eisenbahn",
          "url": "https://recordtv.r7.com/topchef-brasil-3/espaco-artesanal-eisenbahn/feed.xml"
        },
        {
          "id": "r7-gincana-da-grana",
          "name": "Gingacana da Grana",
          "url": "https://recordtv.r7.com/gincana-da-grana/feed.xml"
        },
        {
          "id": "r7-hoje-em-dia",
          "name": "Hoje em Dia",
          "url": "https://recordtv.r7.com/hoje-em-dia/feed.xml"
        },
        {
          "id": "r7-hora-do-faro",
          "name": "Hora do Faro",
          "url": "https://recordtv.r7.com/hora-do-faro/feed.xml"
        },
        {
          "id": "r7-love-school-escola-amor",
          "name": "The Love School",
          "url": "https://recordtv.r7.com/love-school-escola-amor/feed.xml"
        },
        {
          "id": "r7-topchef-brasil-3",
          "name": "Top Chef Brasil 3",
          "url": "https://recordtv.r7.com/topchef-brasil-3/feed.xml"
        },
        {
          "id": "r7-voce-com-the-bar",
          "name": "Você com the bar.com",
          "url": "https://recordtv.r7.com/topchef-brasil-3/voce-com-the-bar/feed.xml"
        },
        {
          "id": "r7-a-biblia",
          "name": "A Bíblia",
          "url": "https://recordtv.r7.com/a-biblia/feed.xml"
        },
        {
          "id": "r7-genesis",
          "name": "Gênesis",
          "url": "https://recordtv.r7.com/genesis/feed.xml"
        },
        {
          "id": "r7-prova-de-amor",
          "name": "Prova de Amor",
          "url": "https://recordtv.r7.com/prova-de-amor/feed.xml"
        },
        {
          "id": "r7-quando-chama-o-coracao",
          "name": "Quando Chama o Coração",
          "url": "https://recordtv.r7.com/quando-chama-o-coracao/feed.xml"
        },
        {
          "id": "r7-reis",
          "name": "Reis",
          "url": "https://recordtv.r7.com/reis/feed.xml"
        }
      ]
    })
  }
}
