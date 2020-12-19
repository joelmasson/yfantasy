<template>
  <div>
    <Search @query="searchPlayers"></Search>
    <FilterMenu :statCategories="stats" :positions="positions" :status="status" :teams="teams" :searchParams="searchParams" @filter="updateFilter"></FilterMenu>

    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pos
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Player
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" v-for="stat in stats" :key="stat.stat_id">
            {{i}}
            <a v-on:click="sortBy(stat.stat_id)">
            {{stat.display_name}}
            </a>
          </th>
        </tr>
      </thead>
      <tbody v-if="players.length >= 1" class="bg-white divide-y divide-gray-200">
        <Player  v-for="player in players" :key="player.id" :player="player" :stats="stats" :allCategories="true"></Player>
      </tbody>
    </table>
  </div>
</template>
<script>
import Axios from 'axios'

import Search from './Search'
import FilterMenu from './FilterMenu'
import Player from './Player'
export default {
  name: 'Players',
  data () {
    return {
      players: [],
      players_old: [
        {
          'player_key': '396.p.4491',
          'player_id': '4491',
          'name': {
            'full': 'Erik Karlsson',
            'first': 'Erik',
            'last': 'Karlsson',
            'ascii_first': 'Erik',
            'ascii_last': 'Karlsson'
          },
          'editorial_player_key': 'nhl.p.4491',
          'editorial_team_key': 'nhl.t.18',
          'editorial_team_full_name': 'San Jose Sharks',
          'editorial_team_abbr': 'SJ',
          'uniform_number': '65',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/mgP_BXsyWDYhIm.Hdh_h7g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/4491.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/mgP_BXsyWDYhIm.Hdh_h7g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/4491.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '6'
              },
              {
                'stat_id': '2',
                'value': '34'
              },
              {
                'stat_id': '4',
                'value': '-15'
              },
              {
                'stat_id': '5',
                'value': '16'
              },
              {
                'stat_id': '8',
                'value': '13'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '26'
              },
              {
                'stat_id': '32',
                'value': '74'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.3705',
          'player_id': '3705',
          'name': {
            'full': 'Dustin Byfuglien',
            'first': 'Dustin',
            'last': 'Byfuglien',
            'ascii_first': 'Dustin',
            'ascii_last': 'Byfuglien'
          },
          'status': 'NA',
          'status_full': 'Not Active',
          'editorial_player_key': 'nhl.p.3705',
          'editorial_team_key': 'nhl.t.28',
          'editorial_team_full_name': 'Winnipeg Jets',
          'editorial_team_abbr': 'Wpg',
          'uniform_number': '33',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/RnP0Oi4Q4oQ.4maAuf.FFQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/3705.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/RnP0Oi4Q4oQ.4maAuf.FFQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/3705.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '-'
              },
              {
                'stat_id': '2',
                'value': '-'
              },
              {
                'stat_id': '4',
                'value': '-'
              },
              {
                'stat_id': '5',
                'value': '-'
              },
              {
                'stat_id': '8',
                'value': '-'
              },
              {
                'stat_id': '12',
                'value': '-'
              },
              {
                'stat_id': '16',
                'value': '-'
              },
              {
                'stat_id': '31',
                'value': '-'
              },
              {
                'stat_id': '32',
                'value': '-'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5983',
          'player_id': '5983',
          'name': {
            'full': 'Seth Jones',
            'first': 'Seth',
            'last': 'Jones',
            'ascii_first': 'Seth',
            'ascii_last': 'Jones'
          },
          'editorial_player_key': 'nhl.p.5983',
          'editorial_team_key': 'nhl.t.29',
          'editorial_team_full_name': 'Columbus Blue Jackets',
          'editorial_team_abbr': 'Cls',
          'uniform_number': '3',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/x7MVFCCRqBfN5imc0apPtQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5983.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/x7MVFCCRqBfN5imc0apPtQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5983.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '6'
              },
              {
                'stat_id': '2',
                'value': '24'
              },
              {
                'stat_id': '4',
                'value': '10'
              },
              {
                'stat_id': '5',
                'value': '20'
              },
              {
                'stat_id': '8',
                'value': '9'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '62'
              },
              {
                'stat_id': '32',
                'value': '123'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5104',
          'player_id': '5104',
          'name': {
            'full': 'John Klingberg',
            'first': 'John',
            'last': 'Klingberg',
            'ascii_first': 'John',
            'ascii_last': 'Klingberg'
          },
          'editorial_player_key': 'nhl.p.5104',
          'editorial_team_key': 'nhl.t.9',
          'editorial_team_full_name': 'Dallas Stars',
          'editorial_team_abbr': 'Dal',
          'uniform_number': '3',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/M7axSZGH2QBBjoiINl8MNA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5104.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/M7axSZGH2QBBjoiINl8MNA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5104.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '6'
              },
              {
                'stat_id': '2',
                'value': '26'
              },
              {
                'stat_id': '4',
                'value': '-10'
              },
              {
                'stat_id': '5',
                'value': '22'
              },
              {
                'stat_id': '8',
                'value': '17'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '29'
              },
              {
                'stat_id': '32',
                'value': '72'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5391',
          'player_id': '5391',
          'name': {
            'full': 'Rickard Rakell',
            'first': 'Rickard',
            'last': 'Rakell',
            'ascii_first': 'Rickard',
            'ascii_last': 'Rakell'
          },
          'editorial_player_key': 'nhl.p.5391',
          'editorial_team_key': 'nhl.t.25',
          'editorial_team_full_name': 'Anaheim Ducks',
          'editorial_team_abbr': 'Anh',
          'uniform_number': '67',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/pldemC2PwZ5.dTobAwCcmw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/5391.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/pldemC2PwZ5.dTobAwCcmw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/5391.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'LW',
          'eligible_positions': [
            'LW',
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '15'
              },
              {
                'stat_id': '2',
                'value': '27'
              },
              {
                'stat_id': '4',
                'value': '-5'
              },
              {
                'stat_id': '5',
                'value': '12'
              },
              {
                'stat_id': '8',
                'value': '9'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '16',
                'value': '10'
              },
              {
                'stat_id': '31',
                'value': '81'
              },
              {
                'stat_id': '32',
                'value': '29'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5282',
          'player_id': '5282',
          'name': {
            'full': 'Cam Atkinson',
            'first': 'Cam',
            'last': 'Atkinson',
            'ascii_first': 'Cam',
            'ascii_last': 'Atkinson'
          },
          'editorial_player_key': 'nhl.p.5282',
          'editorial_team_key': 'nhl.t.29',
          'editorial_team_full_name': 'Columbus Blue Jackets',
          'editorial_team_abbr': 'Cls',
          'uniform_number': '13',
          'display_position': 'RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/dYJFNV6bc1nBzR6eVDnC3Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5282.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/dYJFNV6bc1nBzR6eVDnC3Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5282.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'RW',
          'eligible_positions': [
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '12'
              },
              {
                'stat_id': '2',
                'value': '14'
              },
              {
                'stat_id': '4',
                'value': '2'
              },
              {
                'stat_id': '5',
                'value': '6'
              },
              {
                'stat_id': '8',
                'value': '8'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '16',
                'value': '27'
              },
              {
                'stat_id': '31',
                'value': '18'
              },
              {
                'stat_id': '32',
                'value': '21'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.6480',
          'player_id': '6480',
          'name': {
            'full': 'Viktor Arvidsson',
            'first': 'Viktor',
            'last': 'Arvidsson',
            'ascii_first': 'Viktor',
            'ascii_last': 'Arvidsson'
          },
          'status': 'O',
          'status_full': 'Out',
          'injury_note': 'Undisclosed',
          'editorial_player_key': 'nhl.p.6480',
          'editorial_team_key': 'nhl.t.27',
          'editorial_team_full_name': 'Nashville Predators',
          'editorial_team_abbr': 'Nsh',
          'uniform_number': '33',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/7pKRZLwaDXbkI38V__7t5A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/6480.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/7pKRZLwaDXbkI38V__7t5A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/6480.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'LW',
          'eligible_positions': [
            'LW',
            'RW',
            'Util',
            'IR+'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '15'
              },
              {
                'stat_id': '2',
                'value': '13'
              },
              {
                'stat_id': '4',
                'value': '-4'
              },
              {
                'stat_id': '5',
                'value': '26'
              },
              {
                'stat_id': '8',
                'value': '8'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '16',
                'value': '11'
              },
              {
                'stat_id': '31',
                'value': '27'
              },
              {
                'stat_id': '32',
                'value': '24'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.8280',
          'player_id': '8280',
          'name': {
            'full': 'Kaapo Kakko',
            'first': 'Kaapo',
            'last': 'Kakko',
            'ascii_first': 'Kaapo',
            'ascii_last': 'Kakko'
          },
          'editorial_player_key': 'nhl.p.8280',
          'editorial_team_key': 'nhl.t.13',
          'editorial_team_full_name': 'New York Rangers',
          'editorial_team_abbr': 'NYR',
          'uniform_number': '24',
          'display_position': 'RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/0AVuxb0zydsRqjvQvwk0IQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/09302019/8280.1.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/0AVuxb0zydsRqjvQvwk0IQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/09302019/8280.1.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'RW',
          'eligible_positions': [
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '10'
              },
              {
                'stat_id': '2',
                'value': '13'
              },
              {
                'stat_id': '4',
                'value': '-26'
              },
              {
                'stat_id': '5',
                'value': '14'
              },
              {
                'stat_id': '8',
                'value': '13'
              },
              {
                'stat_id': '12',
                'value': '3'
              },
              {
                'stat_id': '16',
                'value': '2'
              },
              {
                'stat_id': '31',
                'value': '20'
              },
              {
                'stat_id': '32',
                'value': '11'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5967',
          'player_id': '5967',
          'name': {
            'full': 'Antti Raanta',
            'first': 'Antti',
            'last': 'Raanta',
            'ascii_first': 'Antti',
            'ascii_last': 'Raanta'
          },
          'editorial_player_key': 'nhl.p.5967',
          'editorial_team_key': 'nhl.t.24',
          'editorial_team_full_name': 'Arizona Coyotes',
          'editorial_team_abbr': 'Ari',
          'uniform_number': '32',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/DdSOwYziMlEFErkJC9zN4w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5967.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/DdSOwYziMlEFErkJC9zN4w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5967.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'primary_position': 'G',
          'eligible_positions': [
            'G'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '19',
                'value': '15'
              },
              {
                'stat_id': '22',
                'value': '80'
              },
              {
                'stat_id': '23',
                'value': '2.63'
              },
              {
                'stat_id': '25',
                'value': '934'
              },
              {
                'stat_id': '24',
                'value': '1014'
              },
              {
                'stat_id': '26',
                'value': '.921'
              },
              {
                'stat_id': '27',
                'value': '2'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.4753',
          'player_id': '4753',
          'name': {
            'full': 'Evgenii Dadonov',
            'first': 'Evgenii',
            'last': 'Dadonov',
            'ascii_first': 'Evgenii',
            'ascii_last': 'Dadonov'
          },
          'editorial_player_key': 'nhl.p.4753',
          'editorial_team_key': 'nhl.t.14',
          'editorial_team_full_name': 'Ottawa Senators',
          'editorial_team_abbr': 'Ott',
          'uniform_number': '63',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/E4AbvfaUmgfbw.rQp_QgBg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/4753.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/E4AbvfaUmgfbw.rQp_QgBg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/4753.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'LW',
          'eligible_positions': [
            'LW',
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '25'
              },
              {
                'stat_id': '2',
                'value': '22'
              },
              {
                'stat_id': '4',
                'value': '-7'
              },
              {
                'stat_id': '5',
                'value': '10'
              },
              {
                'stat_id': '8',
                'value': '17'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '29'
              },
              {
                'stat_id': '32',
                'value': '24'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.2645',
          'player_id': '2645',
          'name': {
            'full': 'Henrik Lundqvist',
            'first': 'Henrik',
            'last': 'Lundqvist',
            'ascii_first': 'Henrik',
            'ascii_last': 'Lundqvist'
          },
          'editorial_player_key': 'nhl.p.2645',
          'editorial_team_key': 'nhl.t.23',
          'editorial_team_full_name': 'Washington Capitals',
          'editorial_team_abbr': 'Was',
          'uniform_number': '30',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/qHeYg70Nz14I2XHP5RTsmA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11042019/2645.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/qHeYg70Nz14I2XHP5RTsmA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11042019/2645.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'primary_position': 'G',
          'eligible_positions': [
            'G'
          ],
          'has_player_notes': 1,
          'player_notes_last_timestamp': 1606228102,
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '19',
                'value': '10'
              },
              {
                'stat_id': '22',
                'value': '84'
              },
              {
                'stat_id': '23',
                'value': '3.16'
              },
              {
                'stat_id': '25',
                'value': '799'
              },
              {
                'stat_id': '24',
                'value': '883'
              },
              {
                'stat_id': '26',
                'value': '.905'
              },
              {
                'stat_id': '27',
                'value': '1'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.8279',
          'player_id': '8279',
          'name': {
            'full': 'Jack Hughes',
            'first': 'Jack',
            'last': 'Hughes',
            'ascii_first': 'Jack',
            'ascii_last': 'Hughes'
          },
          'editorial_player_key': 'nhl.p.8279',
          'editorial_team_key': 'nhl.t.11',
          'editorial_team_full_name': 'New Jersey Devils',
          'editorial_team_abbr': 'NJ',
          'uniform_number': '86',
          'display_position': 'C,LW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/8wblVw1hkbusQ0yPiETiEw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/09302019/8279.1.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/8wblVw1hkbusQ0yPiETiEw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/09302019/8279.1.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'C',
          'eligible_positions': [
            'C',
            'LW',
            'Util'
          ],
          'has_player_notes': 1,
          'has_recent_player_notes': 1,
          'player_notes_last_timestamp': 1607034689,
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '7'
              },
              {
                'stat_id': '2',
                'value': '14'
              },
              {
                'stat_id': '4',
                'value': '-26'
              },
              {
                'stat_id': '5',
                'value': '10'
              },
              {
                'stat_id': '8',
                'value': '9'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '16',
                'value': '167'
              },
              {
                'stat_id': '31',
                'value': '12'
              },
              {
                'stat_id': '32',
                'value': '21'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.4207',
          'player_id': '4207',
          'name': {
            'full': 'Patric Hornqvist',
            'first': 'Patric',
            'last': 'Hornqvist',
            'ascii_first': 'Patric',
            'ascii_last': 'Hornqvist'
          },
          'editorial_player_key': 'nhl.p.4207',
          'editorial_team_key': 'nhl.t.26',
          'editorial_team_full_name': 'Florida Panthers',
          'editorial_team_abbr': 'Fla',
          'uniform_number': '70',
          'display_position': 'RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/LoJ7HNrqHoADmCHC6h1eEQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/4207.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/LoJ7HNrqHoADmCHC6h1eEQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/4207.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'RW',
          'eligible_positions': [
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '17'
              },
              {
                'stat_id': '2',
                'value': '15'
              },
              {
                'stat_id': '4',
                'value': '9'
              },
              {
                'stat_id': '5',
                'value': '36'
              },
              {
                'stat_id': '8',
                'value': '7'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '16',
                'value': '2'
              },
              {
                'stat_id': '31',
                'value': '107'
              },
              {
                'stat_id': '32',
                'value': '41'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.6753',
          'player_id': '6753',
          'name': {
            'full': 'Lawson Crouse',
            'first': 'Lawson',
            'last': 'Crouse',
            'ascii_first': 'Lawson',
            'ascii_last': 'Crouse'
          },
          'editorial_player_key': 'nhl.p.6753',
          'editorial_team_key': 'nhl.t.24',
          'editorial_team_full_name': 'Arizona Coyotes',
          'editorial_team_abbr': 'Ari',
          'uniform_number': '67',
          'display_position': 'LW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/mCcbEiOcLS1G0FqscEJHCg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/6753.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/mCcbEiOcLS1G0FqscEJHCg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/6753.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'LW',
          'eligible_positions': [
            'LW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '15'
              },
              {
                'stat_id': '2',
                'value': '10'
              },
              {
                'stat_id': '4',
                'value': '0'
              },
              {
                'stat_id': '5',
                'value': '33'
              },
              {
                'stat_id': '8',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '3'
              },
              {
                'stat_id': '16',
                'value': '24'
              },
              {
                'stat_id': '31',
                'value': '201'
              },
              {
                'stat_id': '32',
                'value': '29'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.3936',
          'player_id': '3936',
          'name': {
            'full': 'Thomas Greiss',
            'first': 'Thomas',
            'last': 'Greiss',
            'ascii_first': 'Thomas',
            'ascii_last': 'Greiss'
          },
          'editorial_player_key': 'nhl.p.3936',
          'editorial_team_key': 'nhl.t.5',
          'editorial_team_full_name': 'Detroit Red Wings',
          'editorial_team_abbr': 'Det',
          'uniform_number': '29',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/3S8SbniTQDIrOlmfONHK4A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11112019/3936.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/3S8SbniTQDIrOlmfONHK4A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11112019/3936.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'primary_position': 'G',
          'eligible_positions': [
            'G'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '19',
                'value': '16'
              },
              {
                'stat_id': '22',
                'value': '73'
              },
              {
                'stat_id': '23',
                'value': '2.74'
              },
              {
                'stat_id': '25',
                'value': '765'
              },
              {
                'stat_id': '24',
                'value': '838'
              },
              {
                'stat_id': '26',
                'value': '.913'
              },
              {
                'stat_id': '27',
                'value': '0'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.3885',
          'player_id': '3885',
          'name': {
            'full': 'Keith Yandle',
            'first': 'Keith',
            'last': 'Yandle',
            'ascii_first': 'Keith',
            'ascii_last': 'Yandle'
          },
          'editorial_player_key': 'nhl.p.3885',
          'editorial_team_key': 'nhl.t.26',
          'editorial_team_full_name': 'Florida Panthers',
          'editorial_team_abbr': 'Fla',
          'uniform_number': '3',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/NCLgDW6WCNmCWQ0.1MJkIQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/3885.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/NCLgDW6WCNmCWQ0.1MJkIQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/3885.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '5'
              },
              {
                'stat_id': '2',
                'value': '40'
              },
              {
                'stat_id': '4',
                'value': '0'
              },
              {
                'stat_id': '5',
                'value': '20'
              },
              {
                'stat_id': '8',
                'value': '21'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '18'
              },
              {
                'stat_id': '32',
                'value': '51'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.4819',
          'player_id': '4819',
          'name': {
            'full': 'Jake Muzzin',
            'first': 'Jake',
            'last': 'Muzzin',
            'ascii_first': 'Jake',
            'ascii_last': 'Muzzin'
          },
          'editorial_player_key': 'nhl.p.4819',
          'editorial_team_key': 'nhl.t.21',
          'editorial_team_full_name': 'Toronto Maple Leafs',
          'editorial_team_abbr': 'Tor',
          'uniform_number': '8',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/02x5rDiHn1L5qPcwLw30SQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/4819.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/02x5rDiHn1L5qPcwLw30SQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/4819.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '6'
              },
              {
                'stat_id': '2',
                'value': '17'
              },
              {
                'stat_id': '4',
                'value': '12'
              },
              {
                'stat_id': '5',
                'value': '40'
              },
              {
                'stat_id': '8',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '109'
              },
              {
                'stat_id': '32',
                'value': '110'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.4328',
          'player_id': '4328',
          'name': {
            'full': 'Wayne Simmonds',
            'first': 'Wayne',
            'last': 'Simmonds',
            'ascii_first': 'Wayne',
            'ascii_last': 'Simmonds'
          },
          'editorial_player_key': 'nhl.p.4328',
          'editorial_team_key': 'nhl.t.21',
          'editorial_team_full_name': 'Toronto Maple Leafs',
          'editorial_team_abbr': 'Tor',
          'uniform_number': '24',
          'display_position': 'RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/bn3R8E8Wb1BTfS_COjyjAw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4328.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/bn3R8E8Wb1BTfS_COjyjAw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4328.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'RW',
          'eligible_positions': [
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '8'
              },
              {
                'stat_id': '2',
                'value': '17'
              },
              {
                'stat_id': '4',
                'value': '-21'
              },
              {
                'stat_id': '5',
                'value': '66'
              },
              {
                'stat_id': '8',
                'value': '9'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '16',
                'value': '29'
              },
              {
                'stat_id': '31',
                'value': '145'
              },
              {
                'stat_id': '32',
                'value': '29'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.7108',
          'player_id': '7108',
          'name': {
            'full': 'David Rittich',
            'first': 'David',
            'last': 'Rittich',
            'ascii_first': 'David',
            'ascii_last': 'Rittich'
          },
          'editorial_player_key': 'nhl.p.7108',
          'editorial_team_key': 'nhl.t.3',
          'editorial_team_full_name': 'Calgary Flames',
          'editorial_team_abbr': 'Cgy',
          'uniform_number': '33',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/KDdA4GXmIJ6Kw_2Sim65SA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10012019/7108.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/KDdA4GXmIJ6Kw_2Sim65SA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10012019/7108.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'primary_position': 'G',
          'eligible_positions': [
            'G'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '19',
                'value': '24'
              },
              {
                'stat_id': '22',
                'value': '138'
              },
              {
                'stat_id': '23',
                'value': '2.97'
              },
              {
                'stat_id': '25',
                'value': '1340'
              },
              {
                'stat_id': '24',
                'value': '1478'
              },
              {
                'stat_id': '26',
                'value': '.907'
              },
              {
                'stat_id': '27',
                'value': '2'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.7115',
          'player_id': '7115',
          'name': {
            'full': 'Clayton Keller',
            'first': 'Clayton',
            'last': 'Keller',
            'ascii_first': 'Clayton',
            'ascii_last': 'Keller'
          },
          'editorial_player_key': 'nhl.p.7115',
          'editorial_team_key': 'nhl.t.24',
          'editorial_team_full_name': 'Arizona Coyotes',
          'editorial_team_abbr': 'Ari',
          'uniform_number': '9',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/P89gqaPmBoM3yZxFSVEP.w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/7115.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/P89gqaPmBoM3yZxFSVEP.w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/7115.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'LW',
          'eligible_positions': [
            'LW',
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '17'
              },
              {
                'stat_id': '2',
                'value': '27'
              },
              {
                'stat_id': '4',
                'value': '-6'
              },
              {
                'stat_id': '5',
                'value': '28'
              },
              {
                'stat_id': '8',
                'value': '15'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '16',
                'value': '8'
              },
              {
                'stat_id': '31',
                'value': '20'
              },
              {
                'stat_id': '32',
                'value': '13'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.6707',
          'player_id': '6707',
          'name': {
            'full': 'Frank Vatrano',
            'first': 'Frank',
            'last': 'Vatrano',
            'ascii_first': 'Frank',
            'ascii_last': 'Vatrano'
          },
          'editorial_player_key': 'nhl.p.6707',
          'editorial_team_key': 'nhl.t.26',
          'editorial_team_full_name': 'Florida Panthers',
          'editorial_team_abbr': 'Fla',
          'uniform_number': '77',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/G1ConmPJhPmf3l8lgIsd3Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/6707.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/G1ConmPJhPmf3l8lgIsd3Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/6707.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'LW',
          'eligible_positions': [
            'LW',
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '16'
              },
              {
                'stat_id': '2',
                'value': '18'
              },
              {
                'stat_id': '4',
                'value': '-8'
              },
              {
                'stat_id': '5',
                'value': '30'
              },
              {
                'stat_id': '8',
                'value': '2'
              },
              {
                'stat_id': '12',
                'value': '4'
              },
              {
                'stat_id': '16',
                'value': '12'
              },
              {
                'stat_id': '31',
                'value': '102'
              },
              {
                'stat_id': '32',
                'value': '43'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5785',
          'player_id': '5785',
          'name': {
            'full': 'Josh Anderson',
            'first': 'Josh',
            'last': 'Anderson',
            'ascii_first': 'Josh',
            'ascii_last': 'Anderson'
          },
          'editorial_player_key': 'nhl.p.5785',
          'editorial_team_key': 'nhl.t.10',
          'editorial_team_full_name': 'Montreal Canadiens',
          'editorial_team_abbr': 'Mon',
          'uniform_number': '17',
          'display_position': 'RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/gj9rKnzc2aGoa3EDFbIZAg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5785.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/gj9rKnzc2aGoa3EDFbIZAg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/5785.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'RW',
          'eligible_positions': [
            'RW',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '1'
              },
              {
                'stat_id': '2',
                'value': '3'
              },
              {
                'stat_id': '4',
                'value': '-8'
              },
              {
                'stat_id': '5',
                'value': '17'
              },
              {
                'stat_id': '8',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '16',
                'value': '7'
              },
              {
                'stat_id': '31',
                'value': '68'
              },
              {
                'stat_id': '32',
                'value': '13'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5010',
          'player_id': '5010',
          'name': {
            'full': 'Justin Faulk',
            'first': 'Justin',
            'last': 'Faulk',
            'ascii_first': 'Justin',
            'ascii_last': 'Faulk'
          },
          'editorial_player_key': 'nhl.p.5010',
          'editorial_team_key': 'nhl.t.19',
          'editorial_team_full_name': 'St. Louis Blues',
          'editorial_team_abbr': 'StL',
          'uniform_number': '72',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/en5XoDozlG3eq0nNBqQ.QQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5010.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/en5XoDozlG3eq0nNBqQ.QQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5010.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '5'
              },
              {
                'stat_id': '2',
                'value': '11'
              },
              {
                'stat_id': '4',
                'value': '-3'
              },
              {
                'stat_id': '5',
                'value': '32'
              },
              {
                'stat_id': '8',
                'value': '3'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '82'
              },
              {
                'stat_id': '32',
                'value': '76'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.5445',
          'player_id': '5445',
          'name': {
            'full': 'Klas Dahlbeck',
            'first': 'Klas',
            'last': 'Dahlbeck',
            'ascii_first': 'Klas',
            'ascii_last': 'Dahlbeck'
          },
          'status': 'NA',
          'status_full': 'Not Active',
          'editorial_player_key': 'nhl.p.5445',
          'editorial_team_key': 'nhl.t.7',
          'editorial_team_full_name': 'Carolina Hurricanes',
          'editorial_team_abbr': 'Car',
          'uniform_number': '6',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/XG8YI4ts.b139OpIKpJhrw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03022018/5445.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/XG8YI4ts.b139OpIKpJhrw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03022018/5445.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '-'
              },
              {
                'stat_id': '2',
                'value': '-'
              },
              {
                'stat_id': '4',
                'value': '-'
              },
              {
                'stat_id': '5',
                'value': '-'
              },
              {
                'stat_id': '8',
                'value': '-'
              },
              {
                'stat_id': '12',
                'value': '-'
              },
              {
                'stat_id': '16',
                'value': '-'
              },
              {
                'stat_id': '31',
                'value': '-'
              },
              {
                'stat_id': '32',
                'value': '-'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        },
        {
          'player_key': '396.p.4691',
          'player_id': '4691',
          'name': {
            'full': 'Ryan Ellis',
            'first': 'Ryan',
            'last': 'Ellis',
            'ascii_first': 'Ryan',
            'ascii_last': 'Ellis'
          },
          'editorial_player_key': 'nhl.p.4691',
          'editorial_team_key': 'nhl.t.27',
          'editorial_team_full_name': 'Nashville Predators',
          'editorial_team_abbr': 'Nsh',
          'uniform_number': '4',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/D_gJgIcLicULqU8m4wV5aw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/4691.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/D_gJgIcLicULqU8m4wV5aw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/4691.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'primary_position': 'D',
          'eligible_positions': [
            'D',
            'Util'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '1',
                'value': '8'
              },
              {
                'stat_id': '2',
                'value': '30'
              },
              {
                'stat_id': '4',
                'value': '16'
              },
              {
                'stat_id': '5',
                'value': '19'
              },
              {
                'stat_id': '8',
                'value': '9'
              },
              {
                'stat_id': '12',
                'value': '3'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '48'
              },
              {
                'stat_id': '32',
                'value': '96'
              }
            ]
          },
          'ownership': {
            'ownership_type': 'freeagents'
          }
        }
      ],
      positions: [],
      stats: [],
      teams: [],
      searchParams: {
        league_keys: [
          this.$route.params.game_id + '.l.' + this.$route.params.league_id
        ],
        filter: {
          position: 'P',
          status: 'A',
          search: '',
          sort: 'AR',
          sort_type: 'season',
          sort_season: new Date().getFullYear(),
          sort_week: '',
          start: '',
          count: ''
        },
        subresources: ['stats', 'ownership']
      }
    }
  },
  methods: {
    searchPlayers: function (value) {
      console.log(value)
      this.searchParams.filter.search = value
      this.searchParams.filter.status = ''
      this.getPlayers()
    },
    updateFilter: function (status, position, stats) {
      let statsFilter = stats.split('_')
      let date = new Date()
      this.searchParams.filter.position = position
      this.searchParams.filter.status = status
      this.searchParams.filter.stat1 = stats
      if (statsFilter[1] === 'S') {
        this.searchParams.filter.sort_season = statsFilter[2]
      }
      if (statsFilter[1] === 'L') {
        this.searchParams.filter.start = date.toISOString().slice(0, 10)
      }
      if (statsFilter[1] === 'L30') {
        date.setDate(date.getDate() - 30)
        this.searchParams.filter.start = date.toISOString().slice(0, 10)
      }
      if (statsFilter[1] === 'L14') {
        date.setDate(date.getDate() - 14)
        this.searchParams.filter.start = date.toISOString().slice(0, 10)
      }
      if (statsFilter[1] === 'L7') {
        date.setDate(date.getDate() - 7)
        this.searchParams.filter.start = date.toISOString().slice(0, 10)
      }
      if (statsFilter[0] === 'S') {
        // this.getPlayers()
      } else {
        // this.getAdvancedPlayers()
      }
      this.getAdvancedPlayers()
      this.getPlayers()
    },
    sortBy: function (id) {
      this.searchParams.filter.sort = id
      this.getPlayers()
    },
    getPlayers: function () {
      let self = this
      console.log(self.searchParams)
      Axios.post('/api/yahoo/players/leagues', {
        league_keys: self.searchParams.league_keys,
        filter: self.searchParams.filter,
        subresources: self.searchParams.subresources
      })
        .then((response) => {
          console.log(response)
          self.players = response.data[0].players
          // self.league = response.data[0]
          // self.updateStore()
        })
        .catch((error) => {
          // self.updateStore()
          console.log(error)
        })
    },
    getAdvancedPlayers: function () {
      let self = this
      console.log(self.searchParams)
      const playerKeys = self.players.map(player => {
        return player.player_key
      })
      Axios.post('/api/yahoo/players/fetch', {
        player_key: playerKeys,
        subresources: ['stats']
      })
        .then((response) => {
          console.log('A', response)
        })
        .catch((error) => {
          // self.updateStore()
          console.log(error)
        })
      Axios.post('/api/yahoo/league/players', {
        league_key: this.searchParams.league_keys[0],
        player_key: playerKeys
      })
        .then((response) => {
          console.log('A', response)
        })
        .catch((error) => {
          // self.updateStore()
          console.log(error)
        })
    },
    getLeagueSettings: function () {
      let self = this
      Axios.post('/api/yahoo/leagues/fetch', {
        league_key: this.searchParams.league_keys[0],
        subresources: ['settings', 'teams']
      })
        .then((response) => {
          console.log(response)
          const positions = response.data[0].settings.roster_positions.filter(position => {
            if (position.position_type !== undefined) {
              return position
            }
          })
          self.stats = response.data[0].settings.stat_categories
          self.teams = response.data[0].teams
          self.positions = positions
        })
        .catch((error) => {
          // self.updateStore()
          console.log(error)
        })
    },
    getGameData: function () {
      Axios.post('/api/yahoo/games/fetch', {
        game_key: 'nhl',
        subresources: ['stat_categories', 'position_types', 'roster_positions']
      })
        .then((response) => {
          console.log(response)
          if (this.$store === undefined) {
            self.stats = response.data[0].stat_categories
          } else {
            self.stats = this.$store.state.categories
          }
          console.log(self.stats)
          const positions = response.data[0].roster_positions.filter(position => {
            if (position.position_type !== undefined) {
              return position
            }
          })
          self.positions = positions
          console.log(positions)
          // self.league = response.data[0]
          // self.updateStore()
        })
        .catch((error) => {
          // self.updateStore()
          console.log(error)
        })
    }
  },
  components: {Search, FilterMenu, Player},
  mounted () {
    this.getPlayers()
    this.getLeagueSettings()
  }
}
</script>
