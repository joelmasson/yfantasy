<template>
<div>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-10" v-for="(player_type, i) in roster" :key="i">
    <!-- <TeamHeader :team="team" ></TeamHeader> -->
    <!-- <FilterMenu></FilterMenu> -->
    <table class="min-w-full divide-y divide-gray-200" x-max="1">
      <thead>
        <tr>
          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pos
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Type
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" v-for="(category, i) in player_type.stats" :key="i">
            {{category.display_name}}
          </th>
        </tr>
      </thead>
      <tbody>
        <Player v-for="player in player_type.players" :key="player.player_id" :player="player" :team="team" :allCategories="false"></Player>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import TeamHeader from './TeamHeader'
import FilterMenu from './FilterMenu'
import Player from './Player'
import Axios from 'axios'

export default {
  name: 'Team',
  data () {
    return {
      team: {
        'team_key': '396.l.13492.t.11',
        'team_id': '11',
        'name': 'Super Duper',
        'is_owned_by_current_login': 1,
        'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
        'team_logos': [
          {
            'size': 'large',
            'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
          }
        ],
        'waiver_priority': 8,
        'number_of_moves': '92',
        'number_of_trades': '2',
        'roster_adds': {
          'coverage_type': 'week',
          'coverage_value': '21',
          'value': '4'
        },
        'league_scoring_type': 'head',
        'has_draft_grade': 0,
        'managers': [
          {
            'manager_id': '11',
            'nickname': 'Joel',
            'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
            'is_current_login': '1',
            'email': 'jm_canada_eh@hotmail.com',
            'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
          }
        ],
        'stats': [
          {
            'stat_id': '1',
            'value': '217'
          },
          {
            'stat_id': '2',
            'value': '417'
          },
          {
            'stat_id': '4',
            'value': '22'
          },
          {
            'stat_id': '5',
            'value': '480'
          },
          {
            'stat_id': '8',
            'value': '169'
          },
          {
            'stat_id': '12',
            'value': '38'
          },
          {
            'stat_id': '16',
            'value': '3720'
          },
          {
            'stat_id': '31',
            'value': '1194'
          },
          {
            'stat_id': '32',
            'value': '899'
          },
          {
            'stat_id': '19',
            'value': '54'
          },
          {
            'stat_id': '22',
            'value': '302'
          },
          {
            'stat_id': '23',
            'value': '2.71'
          },
          {
            'stat_id': '25',
            'value': '3245'
          },
          {
            'stat_id': '24',
            'value': '3547'
          },
          {
            'stat_id': '26',
            'value': '.915'
          },
          {
            'stat_id': '27',
            'value': '7'
          }
        ],
        'points': {
          'coverage_type': 'season',
          'season': '2019',
          'total': '303'
        },
        'standings': {
          'rank': '4',
          'outcome_totals': {
            'wins': '137',
            'losses': '107',
            'ties': '29',
            'percentage': '.555'
          }
        },
        'roster': [
          {
            'player_key': '396.p.4002',
            'player_id': '4002',
            'name': {
              'full': 'Claude Giroux',
              'first': 'Claude',
              'last': 'Giroux',
              'ascii_first': 'Claude',
              'ascii_last': 'Giroux'
            },
            'editorial_player_key': 'nhl.p.4002',
            'editorial_team_key': 'nhl.t.15',
            'editorial_team_full_name': 'Philadelphia Flyers',
            'editorial_team_abbr': 'Phi',
            'uniform_number': '28',
            'display_position': 'C,LW,RW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/KAX52udL4XbdehbhbjV06w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11182019/4002.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/KAX52udL4XbdehbhbjV06w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11182019/4002.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'LW',
              'RW',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'C'
          },
          {
            'player_key': '396.p.5363',
            'player_id': '5363',
            'name': {
              'full': 'Gabriel Landeskog',
              'first': 'Gabriel',
              'last': 'Landeskog',
              'ascii_first': 'Gabriel',
              'ascii_last': 'Landeskog'
            },
            'status': 'O',
            'status_full': 'Out',
            'injury_note': 'Leg',
            'editorial_player_key': 'nhl.p.5363',
            'editorial_team_key': 'nhl.t.17',
            'editorial_team_full_name': 'Colorado Avalanche',
            'editorial_team_abbr': 'Col',
            'uniform_number': '92',
            'display_position': 'C,LW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/NT54j3r.Db5VENoS4JL0cg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10242019/5363.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/NT54j3r.Db5VENoS4JL0cg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10242019/5363.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'LW',
              'Util',
              'IR+'
            ],
            'is_editable': 0,
            'selected_position': 'C'
          },
          {
            'player_key': '396.p.6083',
            'player_id': '6083',
            'name': {
              'full': 'Andrew Copp',
              'first': 'Andrew',
              'last': 'Copp',
              'ascii_first': 'Andrew',
              'ascii_last': 'Copp'
            },
            'editorial_player_key': 'nhl.p.6083',
            'editorial_team_key': 'nhl.t.28',
            'editorial_team_full_name': 'Winnipeg Jets',
            'editorial_team_abbr': 'Wpg',
            'uniform_number': '9',
            'display_position': 'C,LW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/OcI3XEzHvveT_ApE5iw6Vg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/6083.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/OcI3XEzHvveT_ApE5iw6Vg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/6083.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'LW',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'LW'
          },
          {
            'player_key': '396.p.3818',
            'player_id': '3818',
            'name': {
              'full': 'James Neal',
              'first': 'James',
              'last': 'Neal',
              'ascii_first': 'James',
              'ascii_last': 'Neal'
            },
            'editorial_player_key': 'nhl.p.3818',
            'editorial_team_key': 'nhl.t.6',
            'editorial_team_full_name': 'Edmonton Oilers',
            'editorial_team_abbr': 'Edm',
            'uniform_number': '18',
            'display_position': 'LW,RW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/mDSoIWSyFL5wXDZAh5f0og--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3818.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/mDSoIWSyFL5wXDZAh5f0og--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3818.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'LW',
            'eligible_positions': [
              'LW',
              'RW',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'LW'
          },
          {
            'player_key': '396.p.4693',
            'player_id': '4693',
            'name': {
              'full': 'Zack Kassian',
              'first': 'Zack',
              'last': 'Kassian',
              'ascii_first': 'Zack',
              'ascii_last': 'Kassian'
            },
            'editorial_player_key': 'nhl.p.4693',
            'editorial_team_key': 'nhl.t.6',
            'editorial_team_full_name': 'Edmonton Oilers',
            'editorial_team_abbr': 'Edm',
            'uniform_number': '44',
            'display_position': 'RW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/iiSweRuZxum_dXBm2Vae_Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11272019/4693.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/iiSweRuZxum_dXBm2Vae_Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11272019/4693.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'RW',
            'eligible_positions': [
              'RW',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'RW'
          },
          {
            'player_key': '396.p.6544',
            'player_id': '6544',
            'name': {
              'full': 'Sammy Blais',
              'first': 'Sammy',
              'last': 'Blais',
              'ascii_first': 'Sammy',
              'ascii_last': 'Blais'
            },
            'editorial_player_key': 'nhl.p.6544',
            'editorial_team_key': 'nhl.t.19',
            'editorial_team_full_name': 'St. Louis Blues',
            'editorial_team_abbr': 'StL',
            'uniform_number': '9',
            'display_position': 'LW,RW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/FUNjM5DUbPZ_WMO3IJ39wQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/6544.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/FUNjM5DUbPZ_WMO3IJ39wQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/6544.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'LW',
            'eligible_positions': [
              'LW',
              'RW',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'RW'
          },
          {
            'player_key': '396.p.7117',
            'player_id': '7117',
            'name': {
              'full': 'Mikhail Sergachev',
              'first': 'Mikhail',
              'last': 'Sergachev',
              'ascii_first': 'Mikhail',
              'ascii_last': 'Sergachev'
            },
            'editorial_player_key': 'nhl.p.7117',
            'editorial_team_key': 'nhl.t.20',
            'editorial_team_full_name': 'Tampa Bay Lightning',
            'editorial_team_abbr': 'TB',
            'uniform_number': '98',
            'display_position': 'D',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/TnbWQK4VTaY38CfQ1mCcPQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/7117.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/TnbWQK4VTaY38CfQ1mCcPQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/7117.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'D',
            'eligible_positions': [
              'D',
              'Util'
            ],
            'has_player_notes': 1,
            'player_notes_last_timestamp': 1606490573,
            'is_editable': 0,
            'selected_position': 'D'
          },
          {
            'player_key': '396.p.5810',
            'player_id': '5810',
            'name': {
              'full': 'Jaccob Slavin',
              'first': 'Jaccob',
              'last': 'Slavin',
              'ascii_first': 'Jaccob',
              'ascii_last': 'Slavin'
            },
            'editorial_player_key': 'nhl.p.5810',
            'editorial_team_key': 'nhl.t.7',
            'editorial_team_full_name': 'Carolina Hurricanes',
            'editorial_team_abbr': 'Car',
            'uniform_number': '74',
            'display_position': 'D',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/aANwk3sIRgR30E5zKXyrhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5810.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/aANwk3sIRgR30E5zKXyrhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5810.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'D',
            'eligible_positions': [
              'D',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'D'
          },
          {
            'player_key': '396.p.6407',
            'player_id': '6407',
            'name': {
              'full': 'Marcus Pettersson',
              'first': 'Marcus',
              'last': 'Pettersson',
              'ascii_first': 'Marcus',
              'ascii_last': 'Pettersson'
            },
            'editorial_player_key': 'nhl.p.6407',
            'editorial_team_key': 'nhl.t.16',
            'editorial_team_full_name': 'Pittsburgh Penguins',
            'editorial_team_abbr': 'Pit',
            'uniform_number': '28',
            'display_position': 'D',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/Taw.6XA_23omHQr12o32AA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/6407.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/Taw.6XA_23omHQr12o32AA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/6407.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'D',
            'eligible_positions': [
              'D',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'D'
          },
          {
            'player_key': '396.p.4935',
            'player_id': '4935',
            'name': {
              'full': 'Christopher Tanev',
              'first': 'Christopher',
              'last': 'Tanev',
              'ascii_first': 'Christopher',
              'ascii_last': 'Tanev'
            },
            'editorial_player_key': 'nhl.p.4935',
            'editorial_team_key': 'nhl.t.3',
            'editorial_team_full_name': 'Calgary Flames',
            'editorial_team_abbr': 'Cgy',
            'uniform_number': '8',
            'display_position': 'D',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/SKGVqu6y38qdTUph10uRQg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4935.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/SKGVqu6y38qdTUph10uRQg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4935.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'D',
            'eligible_positions': [
              'D',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'D'
          },
          {
            'player_key': '396.p.3357',
            'player_id': '3357',
            'name': {
              'full': 'Ryan Getzlaf',
              'first': 'Ryan',
              'last': 'Getzlaf',
              'ascii_first': 'Ryan',
              'ascii_last': 'Getzlaf'
            },
            'editorial_player_key': 'nhl.p.3357',
            'editorial_team_key': 'nhl.t.25',
            'editorial_team_full_name': 'Anaheim Ducks',
            'editorial_team_abbr': 'Anh',
            'uniform_number': '15',
            'display_position': 'C',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/weglW8XqxA42lQosbgtKyQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/3357.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/weglW8XqxA42lQosbgtKyQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/3357.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'Util'
          },
          {
            'player_key': '396.p.5981',
            'player_id': '5981',
            'name': {
              'full': 'Aleksander Barkov',
              'first': 'Aleksander',
              'last': 'Barkov',
              'ascii_first': 'Aleksander',
              'ascii_last': 'Barkov'
            },
            'editorial_player_key': 'nhl.p.5981',
            'editorial_team_key': 'nhl.t.26',
            'editorial_team_full_name': 'Florida Panthers',
            'editorial_team_abbr': 'Fla',
            'uniform_number': '16',
            'display_position': 'C',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'BN'
          },
          {
            'player_key': '396.p.7111',
            'player_id': '7111',
            'name': {
              'full': 'Pierre-Luc Dubois',
              'first': 'Pierre-Luc',
              'last': 'Dubois',
              'ascii_first': 'Pierre-Luc',
              'ascii_last': 'Dubois'
            },
            'editorial_player_key': 'nhl.p.7111',
            'editorial_team_key': 'nhl.t.29',
            'editorial_team_full_name': 'Columbus Blue Jackets',
            'editorial_team_abbr': 'Cls',
            'uniform_number': '18',
            'display_position': 'C',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/zIj_xmNZrN1qO_ns_vquaw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/7111.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/zIj_xmNZrN1qO_ns_vquaw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/7111.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'BN'
          },
          {
            'player_key': '396.p.5366',
            'player_id': '5366',
            'name': {
              'full': 'Ryan Strome',
              'first': 'Ryan',
              'last': 'Strome',
              'ascii_first': 'Ryan',
              'ascii_last': 'Strome'
            },
            'editorial_player_key': 'nhl.p.5366',
            'editorial_team_key': 'nhl.t.13',
            'editorial_team_full_name': 'New York Rangers',
            'editorial_team_abbr': 'NYR',
            'uniform_number': '16',
            'display_position': 'C,RW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/McB4Nttu1u4MvZOyXKj9Sg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10012019/5366.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/McB4Nttu1u4MvZOyXKj9Sg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10012019/5366.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'RW',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'BN'
          },
          {
            'player_key': '396.p.5254',
            'player_id': '5254',
            'name': {
              'full': 'Dmitry Orlov',
              'first': 'Dmitry',
              'last': 'Orlov',
              'ascii_first': 'Dmitry',
              'ascii_last': 'Orlov'
            },
            'editorial_player_key': 'nhl.p.5254',
            'editorial_team_key': 'nhl.t.23',
            'editorial_team_full_name': 'Washington Capitals',
            'editorial_team_abbr': 'Was',
            'uniform_number': '9',
            'display_position': 'D',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/5.l_sY5gnHqKJNSKg1Z.5Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10182019/5254.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/5.l_sY5gnHqKJNSKg1Z.5Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10182019/5254.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'D',
            'eligible_positions': [
              'D',
              'Util'
            ],
            'is_editable': 0,
            'selected_position': 'BN'
          },
          {
            'player_key': '396.p.5820',
            'player_id': '5820',
            'name': {
              'full': 'Connor Hellebuyck',
              'first': 'Connor',
              'last': 'Hellebuyck',
              'ascii_first': 'Connor',
              'ascii_last': 'Hellebuyck'
            },
            'editorial_player_key': 'nhl.p.5820',
            'editorial_team_key': 'nhl.t.28',
            'editorial_team_full_name': 'Winnipeg Jets',
            'editorial_team_abbr': 'Wpg',
            'uniform_number': '37',
            'display_position': 'G',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
            'is_undroppable': '0',
            'position_type': 'G',
            'primary_position': 'G',
            'eligible_positions': [
              'G'
            ],
            'is_editable': 0,
            'selected_position': 'G'
          },
          {
            'player_key': '396.p.3231',
            'player_id': '3231',
            'name': {
              'full': 'Mike Smith',
              'first': 'Mike',
              'last': 'Smith',
              'ascii_first': 'Mike',
              'ascii_last': 'Smith'
            },
            'editorial_player_key': 'nhl.p.3231',
            'editorial_team_key': 'nhl.t.6',
            'editorial_team_full_name': 'Edmonton Oilers',
            'editorial_team_abbr': 'Edm',
            'uniform_number': '41',
            'display_position': 'G',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/amLbnSXwAuxkHV7De7saxA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3231.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/amLbnSXwAuxkHV7De7saxA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3231.png',
            'is_undroppable': '0',
            'position_type': 'G',
            'primary_position': 'G',
            'eligible_positions': [
              'G'
            ],
            'is_editable': 0,
            'selected_position': 'G'
          },
          {
            'player_key': '396.p.4901',
            'player_id': '4901',
            'name': {
              'full': 'Sergei Bobrovsky',
              'first': 'Sergei',
              'last': 'Bobrovsky',
              'ascii_first': 'Sergei',
              'ascii_last': 'Bobrovsky'
            },
            'editorial_player_key': 'nhl.p.4901',
            'editorial_team_key': 'nhl.t.26',
            'editorial_team_full_name': 'Florida Panthers',
            'editorial_team_abbr': 'Fla',
            'uniform_number': '72',
            'display_position': 'G',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/Mi9JbNoFOiKolfvgF19nhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4901.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/Mi9JbNoFOiKolfvgF19nhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4901.png',
            'is_undroppable': '0',
            'position_type': 'G',
            'primary_position': 'G',
            'eligible_positions': [
              'G'
            ],
            'is_editable': 0,
            'selected_position': 'BN'
          },
          {
            'player_key': '396.p.4471',
            'player_id': '4471',
            'name': {
              'full': 'Steven Stamkos',
              'first': 'Steven',
              'last': 'Stamkos',
              'ascii_first': 'Steven',
              'ascii_last': 'Stamkos'
            },
            'status': 'O',
            'status_full': 'Out',
            'injury_note': 'Abdomen',
            'editorial_player_key': 'nhl.p.4471',
            'editorial_team_key': 'nhl.t.20',
            'editorial_team_full_name': 'Tampa Bay Lightning',
            'editorial_team_abbr': 'TB',
            'uniform_number': '91',
            'display_position': 'C,LW,RW',
            'headshot': {
              'url': 'https://s.yimg.com/iu/api/res/1.2/4ziRPxiWa36w2aODTCRyeg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/4471.png',
              'size': 'small'
            },
            'image_url': 'https://s.yimg.com/iu/api/res/1.2/4ziRPxiWa36w2aODTCRyeg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/4471.png',
            'is_undroppable': '0',
            'position_type': 'P',
            'primary_position': 'C',
            'eligible_positions': [
              'C',
              'LW',
              'RW',
              'Util',
              'IR+'
            ],
            'is_editable': 0,
            'selected_position': 'IR+'
          }
        ],
        'matchups': [
          {
            'week': '1',
            'week_start': '2019-10-02',
            'week_end': '2019-10-13',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.5',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': '1',
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '19'
                  },
                  {
                    'stat_id': '2',
                    'value': '21'
                  },
                  {
                    'stat_id': '4',
                    'value': '-10'
                  },
                  {
                    'stat_id': '5',
                    'value': '33'
                  },
                  {
                    'stat_id': '8',
                    'value': '11'
                  },
                  {
                    'stat_id': '12',
                    'value': '4'
                  },
                  {
                    'stat_id': '16',
                    'value': '193'
                  },
                  {
                    'stat_id': '31',
                    'value': '104'
                  },
                  {
                    'stat_id': '32',
                    'value': '54'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '13'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.57'
                  },
                  {
                    'stat_id': '25',
                    'value': '157'
                  },
                  {
                    'stat_id': '24',
                    'value': '170'
                  },
                  {
                    'stat_id': '26',
                    'value': '.924'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.5',
                'team_id': '5',
                'name': 'Don’t Toews Me Bro!',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/5',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_2.png'
                  }
                ],
                'waiver_priority': 4,
                'number_of_moves': '46',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '5'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '5',
                    'nickname': 'Harvey Milne',
                    'guid': '6HG3VNJ5OWLOIV7CJHKBKUBUTM',
                    'email': 'x_pac6@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': '1',
                  'total': '6'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '19'
                  },
                  {
                    'stat_id': '2',
                    'value': '29'
                  },
                  {
                    'stat_id': '4',
                    'value': '-6'
                  },
                  {
                    'stat_id': '5',
                    'value': '31'
                  },
                  {
                    'stat_id': '8',
                    'value': '22'
                  },
                  {
                    'stat_id': '12',
                    'value': '3'
                  },
                  {
                    'stat_id': '16',
                    'value': '114'
                  },
                  {
                    'stat_id': '31',
                    'value': '54'
                  },
                  {
                    'stat_id': '32',
                    'value': '44'
                  },
                  {
                    'stat_id': '19',
                    'value': '9'
                  },
                  {
                    'stat_id': '22',
                    'value': '23'
                  },
                  {
                    'stat_id': '23',
                    'value': '1.98'
                  },
                  {
                    'stat_id': '25',
                    'value': '333'
                  },
                  {
                    'stat_id': '24',
                    'value': '356'
                  },
                  {
                    'stat_id': '26',
                    'value': '.935'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 2,
            'week_start': '2019-10-14',
            'week_end': '2019-10-20',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'winner_team_key': '396.l.13492.t.11'
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 2,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '11'
                  },
                  {
                    'stat_id': '2',
                    'value': '17'
                  },
                  {
                    'stat_id': '4',
                    'value': '3'
                  },
                  {
                    'stat_id': '5',
                    'value': '24'
                  },
                  {
                    'stat_id': '8',
                    'value': '8'
                  },
                  {
                    'stat_id': '12',
                    'value': '3'
                  },
                  {
                    'stat_id': '16',
                    'value': '126'
                  },
                  {
                    'stat_id': '31',
                    'value': '59'
                  },
                  {
                    'stat_id': '32',
                    'value': '41'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '10'
                  },
                  {
                    'stat_id': '23',
                    'value': '1.64'
                  },
                  {
                    'stat_id': '25',
                    'value': '171'
                  },
                  {
                    'stat_id': '24',
                    'value': '181'
                  },
                  {
                    'stat_id': '26',
                    'value': '.945'
                  },
                  {
                    'stat_id': '27',
                    'value': '2'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.6',
                'team_id': '6',
                'name': 'Laser Falcons',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/6',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24957944639_a8c0e68e13.jpg'
                  }
                ],
                'waiver_priority': 5,
                'number_of_moves': '48',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '3'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '6',
                    'nickname': 'T. Roscoe',
                    'guid': 'CNCYZPYD3YL4YGNQG6UH4N4WAI',
                    'email': 'tkiely42@yahoo.com',
                    'image_url': 'https://s.yimg.com/ag/images/4730/24365090257_d58d3c_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 2,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '16'
                  },
                  {
                    'stat_id': '2',
                    'value': '16'
                  },
                  {
                    'stat_id': '4',
                    'value': '15'
                  },
                  {
                    'stat_id': '5',
                    'value': '10'
                  },
                  {
                    'stat_id': '8',
                    'value': '8'
                  },
                  {
                    'stat_id': '12',
                    'value': '4'
                  },
                  {
                    'stat_id': '16',
                    'value': '74'
                  },
                  {
                    'stat_id': '31',
                    'value': '37'
                  },
                  {
                    'stat_id': '32',
                    'value': '34'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '6'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.00'
                  },
                  {
                    'stat_id': '25',
                    'value': '99'
                  },
                  {
                    'stat_id': '24',
                    'value': '105'
                  },
                  {
                    'stat_id': '26',
                    'value': '.943'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 3,
            'week_start': '2019-10-21',
            'week_end': '2019-10-27',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 1,
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 3,
                  'total': '6'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '10'
                  },
                  {
                    'stat_id': '2',
                    'value': '23'
                  },
                  {
                    'stat_id': '4',
                    'value': '7'
                  },
                  {
                    'stat_id': '5',
                    'value': '32'
                  },
                  {
                    'stat_id': '8',
                    'value': '6'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '181'
                  },
                  {
                    'stat_id': '31',
                    'value': '78'
                  },
                  {
                    'stat_id': '32',
                    'value': '46'
                  },
                  {
                    'stat_id': '19',
                    'value': '1'
                  },
                  {
                    'stat_id': '22',
                    'value': '14'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.20'
                  },
                  {
                    'stat_id': '25',
                    'value': '126'
                  },
                  {
                    'stat_id': '24',
                    'value': '140'
                  },
                  {
                    'stat_id': '26',
                    'value': '.900'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.7',
                'team_id': '7',
                'name': 'leafs nation',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/7',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_10.png'
                  }
                ],
                'waiver_priority': 9,
                'number_of_moves': '94',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '3'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '7',
                    'nickname': 'Allen',
                    'guid': 'E67HKVCPRMXPXZ52ER3WH4M6NM',
                    'email': 'allen24342003@yahoo.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 3,
                  'total': '6'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '18'
                  },
                  {
                    'stat_id': '2',
                    'value': '16'
                  },
                  {
                    'stat_id': '4',
                    'value': '3'
                  },
                  {
                    'stat_id': '5',
                    'value': '24'
                  },
                  {
                    'stat_id': '8',
                    'value': '12'
                  },
                  {
                    'stat_id': '12',
                    'value': '4'
                  },
                  {
                    'stat_id': '16',
                    'value': '96'
                  },
                  {
                    'stat_id': '31',
                    'value': '60'
                  },
                  {
                    'stat_id': '32',
                    'value': '31'
                  },
                  {
                    'stat_id': '19',
                    'value': '4'
                  },
                  {
                    'stat_id': '22',
                    'value': '16'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.61'
                  },
                  {
                    'stat_id': '25',
                    'value': '161'
                  },
                  {
                    'stat_id': '24',
                    'value': '177'
                  },
                  {
                    'stat_id': '26',
                    'value': '.910'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 4,
            'week_start': '2019-10-28',
            'week_end': '2019-11-03',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.8'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.8'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.8'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.8'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 4,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '7'
                  },
                  {
                    'stat_id': '2',
                    'value': '23'
                  },
                  {
                    'stat_id': '4',
                    'value': '-10'
                  },
                  {
                    'stat_id': '5',
                    'value': '14'
                  },
                  {
                    'stat_id': '8',
                    'value': '8'
                  },
                  {
                    'stat_id': '12',
                    'value': '0'
                  },
                  {
                    'stat_id': '16',
                    'value': '167'
                  },
                  {
                    'stat_id': '31',
                    'value': '44'
                  },
                  {
                    'stat_id': '32',
                    'value': '28'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '9'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.55'
                  },
                  {
                    'stat_id': '25',
                    'value': '139'
                  },
                  {
                    'stat_id': '24',
                    'value': '148'
                  },
                  {
                    'stat_id': '26',
                    'value': '.939'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.8',
                'team_id': '8',
                'name': 'No Longer Jasworx',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/8',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_5.png'
                  }
                ],
                'waiver_priority': 7,
                'number_of_moves': '1',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '0'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '8',
                    'nickname': 'Justin',
                    'guid': '7C3GHHXWLQHEXZBUENYFC3JTXA',
                    'email': 'justindeyell@gmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 4,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '11'
                  },
                  {
                    'stat_id': '2',
                    'value': '15'
                  },
                  {
                    'stat_id': '4',
                    'value': '1'
                  },
                  {
                    'stat_id': '5',
                    'value': '6'
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
                    'value': '24'
                  },
                  {
                    'stat_id': '31',
                    'value': '29'
                  },
                  {
                    'stat_id': '32',
                    'value': '27'
                  },
                  {
                    'stat_id': '19',
                    'value': '0'
                  },
                  {
                    'stat_id': '22',
                    'value': '11'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.77'
                  },
                  {
                    'stat_id': '25',
                    'value': '99'
                  },
                  {
                    'stat_id': '24',
                    'value': '110'
                  },
                  {
                    'stat_id': '26',
                    'value': '.900'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 5,
            'week_start': '2019-11-04',
            'week_end': '2019-11-10',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 5,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '10'
                  },
                  {
                    'stat_id': '2',
                    'value': '19'
                  },
                  {
                    'stat_id': '4',
                    'value': '-15'
                  },
                  {
                    'stat_id': '5',
                    'value': '30'
                  },
                  {
                    'stat_id': '8',
                    'value': '11'
                  },
                  {
                    'stat_id': '12',
                    'value': '1'
                  },
                  {
                    'stat_id': '16',
                    'value': '189'
                  },
                  {
                    'stat_id': '31',
                    'value': '39'
                  },
                  {
                    'stat_id': '32',
                    'value': '40'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '7'
                  },
                  {
                    'stat_id': '23',
                    'value': '1.72'
                  },
                  {
                    'stat_id': '25',
                    'value': '109'
                  },
                  {
                    'stat_id': '24',
                    'value': '116'
                  },
                  {
                    'stat_id': '26',
                    'value': '.940'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.9',
                'team_id': '9',
                'name': 'North Kariya',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/9',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56515160113_e1121f.jpg'
                  }
                ],
                'waiver_priority': 6,
                'number_of_moves': '85',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '5'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '9',
                    'nickname': 'Downzz',
                    'guid': 'NLHDWLXWGLSKLWSIBESQR4D5AA',
                    'email': 'big_e15@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/4566/38735110836_6c76aa_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 5,
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '15'
                  },
                  {
                    'stat_id': '2',
                    'value': '29'
                  },
                  {
                    'stat_id': '4',
                    'value': '19'
                  },
                  {
                    'stat_id': '5',
                    'value': '14'
                  },
                  {
                    'stat_id': '8',
                    'value': '10'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '83'
                  },
                  {
                    'stat_id': '31',
                    'value': '49'
                  },
                  {
                    'stat_id': '32',
                    'value': '35'
                  },
                  {
                    'stat_id': '19',
                    'value': '1'
                  },
                  {
                    'stat_id': '22',
                    'value': '13'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.21'
                  },
                  {
                    'stat_id': '25',
                    'value': '106'
                  },
                  {
                    'stat_id': '24',
                    'value': '119'
                  },
                  {
                    'stat_id': '26',
                    'value': '.891'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 6,
            'week_start': '2019-11-11',
            'week_end': '2019-11-17',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.10',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 6,
                  'total': '2'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '10'
                  },
                  {
                    'stat_id': '2',
                    'value': '17'
                  },
                  {
                    'stat_id': '4',
                    'value': '13'
                  },
                  {
                    'stat_id': '5',
                    'value': '12'
                  },
                  {
                    'stat_id': '8',
                    'value': '10'
                  },
                  {
                    'stat_id': '12',
                    'value': '1'
                  },
                  {
                    'stat_id': '16',
                    'value': '182'
                  },
                  {
                    'stat_id': '31',
                    'value': '29'
                  },
                  {
                    'stat_id': '32',
                    'value': '45'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '15'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.76'
                  },
                  {
                    'stat_id': '25',
                    'value': '102'
                  },
                  {
                    'stat_id': '24',
                    'value': '117'
                  },
                  {
                    'stat_id': '26',
                    'value': '.872'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.10',
                'team_id': '10',
                'name': 'North York Nylanders',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/10',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/30455746845_db501c0bac.jpg'
                  }
                ],
                'waiver_priority': 1,
                'number_of_moves': '2',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '0'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '10',
                    'nickname': 'Pat',
                    'guid': 'IPISOAQXX37FYSTJIT2CT7KL74',
                    'email': 'pirwin26@gmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/4546/37417984563_5dc741_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 6,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '11'
                  },
                  {
                    'stat_id': '2',
                    'value': '25'
                  },
                  {
                    'stat_id': '4',
                    'value': '18'
                  },
                  {
                    'stat_id': '5',
                    'value': '12'
                  },
                  {
                    'stat_id': '8',
                    'value': '10'
                  },
                  {
                    'stat_id': '12',
                    'value': '1'
                  },
                  {
                    'stat_id': '16',
                    'value': '108'
                  },
                  {
                    'stat_id': '31',
                    'value': '64'
                  },
                  {
                    'stat_id': '32',
                    'value': '26'
                  },
                  {
                    'stat_id': '19',
                    'value': '5'
                  },
                  {
                    'stat_id': '22',
                    'value': '14'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.56'
                  },
                  {
                    'stat_id': '25',
                    'value': '138'
                  },
                  {
                    'stat_id': '24',
                    'value': '152'
                  },
                  {
                    'stat_id': '26',
                    'value': '.908'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 7,
            'week_start': '2019-11-18',
            'week_end': '2019-11-24',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.14',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 7,
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '12'
                  },
                  {
                    'stat_id': '2',
                    'value': '15'
                  },
                  {
                    'stat_id': '4',
                    'value': '-3'
                  },
                  {
                    'stat_id': '5',
                    'value': '18'
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
                    'value': '165'
                  },
                  {
                    'stat_id': '31',
                    'value': '46'
                  },
                  {
                    'stat_id': '32',
                    'value': '45'
                  },
                  {
                    'stat_id': '19',
                    'value': '4'
                  },
                  {
                    'stat_id': '22',
                    'value': '11'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.45'
                  },
                  {
                    'stat_id': '25',
                    'value': '138'
                  },
                  {
                    'stat_id': '24',
                    'value': '149'
                  },
                  {
                    'stat_id': '26',
                    'value': '.926'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.14',
                'team_id': '14',
                'name': 'Pastrnak For Scoring',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/14',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/f44936e01abb52e381c5de6e298419640bdc128b1220923154eb65ffab896f7f.jpg'
                  }
                ],
                'waiver_priority': 2,
                'number_of_moves': '90',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '14',
                    'nickname': 'DC',
                    'guid': 'SXM4LHDILXF4XGUNV7PKVVH7YY',
                    'email': 'drew_crosby17@yahoo.ca',
                    'image_url': 'https://s.yimg.com/ag/images/4647/27429759489_56f836_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 7,
                  'total': '6'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '11'
                  },
                  {
                    'stat_id': '2',
                    'value': '15'
                  },
                  {
                    'stat_id': '4',
                    'value': '2'
                  },
                  {
                    'stat_id': '5',
                    'value': '39'
                  },
                  {
                    'stat_id': '8',
                    'value': '11'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '129'
                  },
                  {
                    'stat_id': '31',
                    'value': '50'
                  },
                  {
                    'stat_id': '32',
                    'value': '40'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '11'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.19'
                  },
                  {
                    'stat_id': '25',
                    'value': '166'
                  },
                  {
                    'stat_id': '24',
                    'value': '177'
                  },
                  {
                    'stat_id': '26',
                    'value': '.938'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 8,
            'week_start': '2019-11-25',
            'week_end': '2019-12-01',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.12',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 8,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '10'
                  },
                  {
                    'stat_id': '2',
                    'value': '20'
                  },
                  {
                    'stat_id': '4',
                    'value': '9'
                  },
                  {
                    'stat_id': '5',
                    'value': '16'
                  },
                  {
                    'stat_id': '8',
                    'value': '5'
                  },
                  {
                    'stat_id': '12',
                    'value': '4'
                  },
                  {
                    'stat_id': '16',
                    'value': '183'
                  },
                  {
                    'stat_id': '31',
                    'value': '48'
                  },
                  {
                    'stat_id': '32',
                    'value': '42'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '6'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.00'
                  },
                  {
                    'stat_id': '25',
                    'value': '89'
                  },
                  {
                    'stat_id': '24',
                    'value': '95'
                  },
                  {
                    'stat_id': '26',
                    'value': '.937'
                  },
                  {
                    'stat_id': '27',
                    'value': '1'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.12',
                'team_id': '12',
                'name': 'Gritty’s Grinders',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/12',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/44959982251_2ab3ba.jpg'
                  }
                ],
                'waiver_priority': 3,
                'number_of_moves': '20',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '2'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '12',
                    'nickname': 'Cory Quaresma',
                    'guid': 'NVDADIZ6KCJ6WOEI2RMQTZY3IA',
                    'email': 'cory.quaresma@gmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/4557/37414443143_c66985_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 8,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '12'
                  },
                  {
                    'stat_id': '2',
                    'value': '25'
                  },
                  {
                    'stat_id': '4',
                    'value': '14'
                  },
                  {
                    'stat_id': '5',
                    'value': '34'
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
                    'value': '71'
                  },
                  {
                    'stat_id': '31',
                    'value': '25'
                  },
                  {
                    'stat_id': '32',
                    'value': '28'
                  },
                  {
                    'stat_id': '19',
                    'value': '5'
                  },
                  {
                    'stat_id': '22',
                    'value': '9'
                  },
                  {
                    'stat_id': '23',
                    'value': '1.49'
                  },
                  {
                    'stat_id': '25',
                    'value': '177'
                  },
                  {
                    'stat_id': '24',
                    'value': '186'
                  },
                  {
                    'stat_id': '26',
                    'value': '.952'
                  },
                  {
                    'stat_id': '27',
                    'value': '1'
                  }
                ]
              }
            ]
          },
          {
            'week': 9,
            'week_start': '2019-12-02',
            'week_end': '2019-12-08',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.13'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.13'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.13'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.13'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 9,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '12'
                  },
                  {
                    'stat_id': '2',
                    'value': '26'
                  },
                  {
                    'stat_id': '4',
                    'value': '0'
                  },
                  {
                    'stat_id': '5',
                    'value': '36'
                  },
                  {
                    'stat_id': '8',
                    'value': '10'
                  },
                  {
                    'stat_id': '12',
                    'value': '3'
                  },
                  {
                    'stat_id': '16',
                    'value': '190'
                  },
                  {
                    'stat_id': '31',
                    'value': '56'
                  },
                  {
                    'stat_id': '32',
                    'value': '43'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '10'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.22'
                  },
                  {
                    'stat_id': '25',
                    'value': '131'
                  },
                  {
                    'stat_id': '24',
                    'value': '141'
                  },
                  {
                    'stat_id': '26',
                    'value': '.929'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.13',
                'team_id': '13',
                'name': 'Titty Twisters',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/13',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55193119802_a339ed.jpg'
                  }
                ],
                'waiver_priority': 10,
                'number_of_moves': '86',
                'number_of_trades': '10',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '1'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '13',
                    'nickname': 'Adam',
                    'guid': '4RZB22PP5ZMMAKHXLIF5SW23OY',
                    'email': 'adam@madacomm.ca',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 9,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '5'
                  },
                  {
                    'stat_id': '2',
                    'value': '15'
                  },
                  {
                    'stat_id': '4',
                    'value': '8'
                  },
                  {
                    'stat_id': '5',
                    'value': '19'
                  },
                  {
                    'stat_id': '8',
                    'value': '6'
                  },
                  {
                    'stat_id': '12',
                    'value': '0'
                  },
                  {
                    'stat_id': '16',
                    'value': '136'
                  },
                  {
                    'stat_id': '31',
                    'value': '50'
                  },
                  {
                    'stat_id': '32',
                    'value': '29'
                  },
                  {
                    'stat_id': '19',
                    'value': '5'
                  },
                  {
                    'stat_id': '22',
                    'value': '6'
                  },
                  {
                    'stat_id': '23',
                    'value': '1.18'
                  },
                  {
                    'stat_id': '25',
                    'value': '160'
                  },
                  {
                    'stat_id': '24',
                    'value': '166'
                  },
                  {
                    'stat_id': '26',
                    'value': '.964'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 10,
            'week_start': '2019-12-09',
            'week_end': '2019-12-15',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.1'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.1'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.1'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.1'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.1'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'winner_team_key': '396.l.13492.t.11'
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 10,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '9'
                  },
                  {
                    'stat_id': '2',
                    'value': '14'
                  },
                  {
                    'stat_id': '4',
                    'value': '-7'
                  },
                  {
                    'stat_id': '5',
                    'value': '30'
                  },
                  {
                    'stat_id': '8',
                    'value': '5'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '156'
                  },
                  {
                    'stat_id': '31',
                    'value': '70'
                  },
                  {
                    'stat_id': '32',
                    'value': '54'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '20'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.31'
                  },
                  {
                    'stat_id': '25',
                    'value': '168'
                  },
                  {
                    'stat_id': '24',
                    'value': '188'
                  },
                  {
                    'stat_id': '26',
                    'value': '.894'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.1',
                'team_id': '1',
                'name': 'Junior Mints',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/1',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24708063344_6a67da08aa.jpg'
                  }
                ],
                'waiver_priority': 11,
                'number_of_moves': '92',
                'number_of_trades': '8',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '1',
                    'nickname': 'Dusty',
                    'guid': '7VGL7NQLHHAERB675CCJ3ECVGY',
                    'is_commissioner': '1',
                    'email': 'lepi182@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/1876/43465071884_433417_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 10,
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '15'
                  },
                  {
                    'stat_id': '2',
                    'value': '25'
                  },
                  {
                    'stat_id': '4',
                    'value': '7'
                  },
                  {
                    'stat_id': '5',
                    'value': '16'
                  },
                  {
                    'stat_id': '8',
                    'value': '12'
                  },
                  {
                    'stat_id': '12',
                    'value': '5'
                  },
                  {
                    'stat_id': '16',
                    'value': '128'
                  },
                  {
                    'stat_id': '31',
                    'value': '45'
                  },
                  {
                    'stat_id': '32',
                    'value': '41'
                  },
                  {
                    'stat_id': '19',
                    'value': '1'
                  },
                  {
                    'stat_id': '22',
                    'value': '5'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.51'
                  },
                  {
                    'stat_id': '25',
                    'value': '56'
                  },
                  {
                    'stat_id': '24',
                    'value': '61'
                  },
                  {
                    'stat_id': '26',
                    'value': '.918'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 11,
            'week_start': '2019-12-16',
            'week_end': '2019-12-22',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.2'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.2'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.2'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.2'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.2'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'winner_team_key': '396.l.13492.t.11'
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 11,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '9'
                  },
                  {
                    'stat_id': '2',
                    'value': '16'
                  },
                  {
                    'stat_id': '4',
                    'value': '2'
                  },
                  {
                    'stat_id': '5',
                    'value': '25'
                  },
                  {
                    'stat_id': '8',
                    'value': '7'
                  },
                  {
                    'stat_id': '12',
                    'value': '3'
                  },
                  {
                    'stat_id': '16',
                    'value': '204'
                  },
                  {
                    'stat_id': '31',
                    'value': '59'
                  },
                  {
                    'stat_id': '32',
                    'value': '41'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '15'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.23'
                  },
                  {
                    'stat_id': '25',
                    'value': '130'
                  },
                  {
                    'stat_id': '24',
                    'value': '145'
                  },
                  {
                    'stat_id': '26',
                    'value': '.897'
                  },
                  {
                    'stat_id': '27',
                    'value': '1'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.2',
                'team_id': '2',
                'name': 'Aborted Abortions',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/2',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55179360532_22e79a.jpg'
                  }
                ],
                'waiver_priority': 14,
                'number_of_moves': '53',
                'number_of_trades': '6',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '2'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '2',
                    'nickname': '-- hidden --',
                    'guid': 'EDD7EUCBYK6WZQAKL7MIEPWLSM',
                    'image_url': 'https://s.yimg.com/ag/images/4527/37420082523_4c924c_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 11,
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '15'
                  },
                  {
                    'stat_id': '2',
                    'value': '19'
                  },
                  {
                    'stat_id': '4',
                    'value': '6'
                  },
                  {
                    'stat_id': '5',
                    'value': '40'
                  },
                  {
                    'stat_id': '8',
                    'value': '10'
                  },
                  {
                    'stat_id': '12',
                    'value': '0'
                  },
                  {
                    'stat_id': '16',
                    'value': '174'
                  },
                  {
                    'stat_id': '31',
                    'value': '29'
                  },
                  {
                    'stat_id': '32',
                    'value': '28'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '20'
                  },
                  {
                    'stat_id': '23',
                    'value': '4.25'
                  },
                  {
                    'stat_id': '25',
                    'value': '119'
                  },
                  {
                    'stat_id': '24',
                    'value': '139'
                  },
                  {
                    'stat_id': '26',
                    'value': '.856'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 12,
            'week_start': '2019-12-23',
            'week_end': '2019-12-29',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.3'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.3'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.3'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.3'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 12,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '12'
                  },
                  {
                    'stat_id': '2',
                    'value': '18'
                  },
                  {
                    'stat_id': '4',
                    'value': '8'
                  },
                  {
                    'stat_id': '5',
                    'value': '18'
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
                    'value': '161'
                  },
                  {
                    'stat_id': '31',
                    'value': '39'
                  },
                  {
                    'stat_id': '32',
                    'value': '31'
                  },
                  {
                    'stat_id': '19',
                    'value': '0'
                  },
                  {
                    'stat_id': '22',
                    'value': '15'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.06'
                  },
                  {
                    'stat_id': '25',
                    'value': '122'
                  },
                  {
                    'stat_id': '24',
                    'value': '137'
                  },
                  {
                    'stat_id': '26',
                    'value': '.891'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.3',
                'team_id': '3',
                'name': 'The Mighty Towels',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/3',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56476601481_d01d0b.jpg'
                  }
                ],
                'waiver_priority': 12,
                'number_of_moves': '61',
                'number_of_trades': '3',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '3',
                    'nickname': 'Richard P',
                    'guid': 'PRWHXQ2M23K5GQIWX4JT6BDEQE',
                    'email': 'benchie420@yahoo.ca',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 12,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '9'
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
                    'value': '20'
                  },
                  {
                    'stat_id': '8',
                    'value': '3'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '105'
                  },
                  {
                    'stat_id': '31',
                    'value': '65'
                  },
                  {
                    'stat_id': '32',
                    'value': '41'
                  },
                  {
                    'stat_id': '19',
                    'value': '1'
                  },
                  {
                    'stat_id': '22',
                    'value': '14'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.90'
                  },
                  {
                    'stat_id': '25',
                    'value': '101'
                  },
                  {
                    'stat_id': '24',
                    'value': '115'
                  },
                  {
                    'stat_id': '26',
                    'value': '.878'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 13,
            'week_start': '2019-12-30',
            'week_end': '2020-01-05',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.4'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.4'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.4'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.4'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 13,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '15'
                  },
                  {
                    'stat_id': '2',
                    'value': '22'
                  },
                  {
                    'stat_id': '4',
                    'value': '10'
                  },
                  {
                    'stat_id': '5',
                    'value': '13'
                  },
                  {
                    'stat_id': '8',
                    'value': '13'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '189'
                  },
                  {
                    'stat_id': '31',
                    'value': '33'
                  },
                  {
                    'stat_id': '32',
                    'value': '26'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '25'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.70'
                  },
                  {
                    'stat_id': '25',
                    'value': '213'
                  },
                  {
                    'stat_id': '24',
                    'value': '238'
                  },
                  {
                    'stat_id': '26',
                    'value': '.895'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.4',
                'team_id': '4',
                'name': 'Dickheads',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/4',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/38445937905_996daa.jpg'
                  }
                ],
                'waiver_priority': 13,
                'number_of_moves': '23',
                'number_of_trades': '3',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '1'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '4',
                    'nickname': 'derick',
                    'guid': 'HWK2IENJ65PE3B356A4OTL7T6Q',
                    'email': 'dr.d613@yahoo.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 13,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '11'
                  },
                  {
                    'stat_id': '2',
                    'value': '11'
                  },
                  {
                    'stat_id': '4',
                    'value': '-6'
                  },
                  {
                    'stat_id': '5',
                    'value': '19'
                  },
                  {
                    'stat_id': '8',
                    'value': '5'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '121'
                  },
                  {
                    'stat_id': '31',
                    'value': '37'
                  },
                  {
                    'stat_id': '32',
                    'value': '30'
                  },
                  {
                    'stat_id': '19',
                    'value': '0'
                  },
                  {
                    'stat_id': '22',
                    'value': '12'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.05'
                  },
                  {
                    'stat_id': '25',
                    'value': '98'
                  },
                  {
                    'stat_id': '24',
                    'value': '110'
                  },
                  {
                    'stat_id': '26',
                    'value': '.891'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 14,
            'week_start': '2020-01-06',
            'week_end': '2020-01-12',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.5'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 14,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '6'
                  },
                  {
                    'stat_id': '2',
                    'value': '23'
                  },
                  {
                    'stat_id': '4',
                    'value': '-2'
                  },
                  {
                    'stat_id': '5',
                    'value': '12'
                  },
                  {
                    'stat_id': '8',
                    'value': '6'
                  },
                  {
                    'stat_id': '12',
                    'value': '1'
                  },
                  {
                    'stat_id': '16',
                    'value': '151'
                  },
                  {
                    'stat_id': '31',
                    'value': '44'
                  },
                  {
                    'stat_id': '32',
                    'value': '40'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '11'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.18'
                  },
                  {
                    'stat_id': '25',
                    'value': '132'
                  },
                  {
                    'stat_id': '24',
                    'value': '143'
                  },
                  {
                    'stat_id': '26',
                    'value': '.923'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.5',
                'team_id': '5',
                'name': 'Don’t Toews Me Bro!',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/5',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_2.png'
                  }
                ],
                'waiver_priority': 4,
                'number_of_moves': '46',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '5'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '5',
                    'nickname': 'Harvey Milne',
                    'guid': '6HG3VNJ5OWLOIV7CJHKBKUBUTM',
                    'email': 'x_pac6@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 14,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '9'
                  },
                  {
                    'stat_id': '2',
                    'value': '21'
                  },
                  {
                    'stat_id': '4',
                    'value': '1'
                  },
                  {
                    'stat_id': '5',
                    'value': '14'
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
                    'value': '110'
                  },
                  {
                    'stat_id': '31',
                    'value': '33'
                  },
                  {
                    'stat_id': '32',
                    'value': '37'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '19'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.22'
                  },
                  {
                    'stat_id': '25',
                    'value': '159'
                  },
                  {
                    'stat_id': '24',
                    'value': '178'
                  },
                  {
                    'stat_id': '26',
                    'value': '.893'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 15,
            'week_start': '2020-01-13',
            'week_end': '2020-01-19',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.6'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'winner_team_key': '396.l.13492.t.11'
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 15,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '5'
                  },
                  {
                    'stat_id': '2',
                    'value': '21'
                  },
                  {
                    'stat_id': '4',
                    'value': '21'
                  },
                  {
                    'stat_id': '5',
                    'value': '22'
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
                    'value': '135'
                  },
                  {
                    'stat_id': '31',
                    'value': '51'
                  },
                  {
                    'stat_id': '32',
                    'value': '40'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '14'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.55'
                  },
                  {
                    'stat_id': '25',
                    'value': '163'
                  },
                  {
                    'stat_id': '24',
                    'value': '177'
                  },
                  {
                    'stat_id': '26',
                    'value': '.921'
                  },
                  {
                    'stat_id': '27',
                    'value': '1'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.6',
                'team_id': '6',
                'name': 'Laser Falcons',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/6',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24957944639_a8c0e68e13.jpg'
                  }
                ],
                'waiver_priority': 5,
                'number_of_moves': '48',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '3'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '6',
                    'nickname': 'T. Roscoe',
                    'guid': 'CNCYZPYD3YL4YGNQG6UH4N4WAI',
                    'email': 'tkiely42@yahoo.com',
                    'image_url': 'https://s.yimg.com/ag/images/4730/24365090257_d58d3c_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 15,
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '16'
                  },
                  {
                    'stat_id': '2',
                    'value': '16'
                  },
                  {
                    'stat_id': '4',
                    'value': '-6'
                  },
                  {
                    'stat_id': '5',
                    'value': '18'
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
                    'value': '100'
                  },
                  {
                    'stat_id': '31',
                    'value': '48'
                  },
                  {
                    'stat_id': '32',
                    'value': '49'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '7'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.36'
                  },
                  {
                    'stat_id': '25',
                    'value': '82'
                  },
                  {
                    'stat_id': '24',
                    'value': '89'
                  },
                  {
                    'stat_id': '26',
                    'value': '.921'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 16,
            'week_start': '2020-01-20',
            'week_end': '2020-02-02',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.7'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 16,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '10'
                  },
                  {
                    'stat_id': '2',
                    'value': '29'
                  },
                  {
                    'stat_id': '4',
                    'value': '3'
                  },
                  {
                    'stat_id': '5',
                    'value': '24'
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
                    'value': '184'
                  },
                  {
                    'stat_id': '31',
                    'value': '63'
                  },
                  {
                    'stat_id': '32',
                    'value': '71'
                  },
                  {
                    'stat_id': '19',
                    'value': '1'
                  },
                  {
                    'stat_id': '22',
                    'value': '16'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.29'
                  },
                  {
                    'stat_id': '25',
                    'value': '149'
                  },
                  {
                    'stat_id': '24',
                    'value': '165'
                  },
                  {
                    'stat_id': '26',
                    'value': '.903'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.7',
                'team_id': '7',
                'name': 'leafs nation',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/7',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_10.png'
                  }
                ],
                'waiver_priority': 9,
                'number_of_moves': '94',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '3'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '7',
                    'nickname': 'Allen',
                    'guid': 'E67HKVCPRMXPXZ52ER3WH4M6NM',
                    'email': 'allen24342003@yahoo.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 16,
                  'total': '4'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '18'
                  },
                  {
                    'stat_id': '2',
                    'value': '24'
                  },
                  {
                    'stat_id': '4',
                    'value': '18'
                  },
                  {
                    'stat_id': '5',
                    'value': '16'
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
                    'value': '164'
                  },
                  {
                    'stat_id': '31',
                    'value': '60'
                  },
                  {
                    'stat_id': '32',
                    'value': '33'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '21'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.57'
                  },
                  {
                    'stat_id': '25',
                    'value': '162'
                  },
                  {
                    'stat_id': '24',
                    'value': '183'
                  },
                  {
                    'stat_id': '26',
                    'value': '.885'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 17,
            'week_start': '2020-02-03',
            'week_end': '2020-02-09',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.8'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.8'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 17,
                  'total': '9'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '8'
                  },
                  {
                    'stat_id': '2',
                    'value': '11'
                  },
                  {
                    'stat_id': '4',
                    'value': '10'
                  },
                  {
                    'stat_id': '5',
                    'value': '26'
                  },
                  {
                    'stat_id': '8',
                    'value': '2'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '146'
                  },
                  {
                    'stat_id': '31',
                    'value': '69'
                  },
                  {
                    'stat_id': '32',
                    'value': '31'
                  },
                  {
                    'stat_id': '19',
                    'value': '4'
                  },
                  {
                    'stat_id': '22',
                    'value': '21'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.68'
                  },
                  {
                    'stat_id': '25',
                    'value': '237'
                  },
                  {
                    'stat_id': '24',
                    'value': '258'
                  },
                  {
                    'stat_id': '26',
                    'value': '.919'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.8',
                'team_id': '8',
                'name': 'No Longer Jasworx',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/8',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_5.png'
                  }
                ],
                'waiver_priority': 7,
                'number_of_moves': '1',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '0'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '8',
                    'nickname': 'Justin',
                    'guid': '7C3GHHXWLQHEXZBUENYFC3JTXA',
                    'email': 'justindeyell@gmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 17,
                  'total': '2'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '6'
                  },
                  {
                    'stat_id': '2',
                    'value': '7'
                  },
                  {
                    'stat_id': '4',
                    'value': '-14'
                  },
                  {
                    'stat_id': '5',
                    'value': '8'
                  },
                  {
                    'stat_id': '8',
                    'value': '2'
                  },
                  {
                    'stat_id': '12',
                    'value': '1'
                  },
                  {
                    'stat_id': '16',
                    'value': '22'
                  },
                  {
                    'stat_id': '31',
                    'value': '38'
                  },
                  {
                    'stat_id': '32',
                    'value': '26'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '11'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.19'
                  },
                  {
                    'stat_id': '25',
                    'value': '135'
                  },
                  {
                    'stat_id': '24',
                    'value': '146'
                  },
                  {
                    'stat_id': '26',
                    'value': '.925'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 18,
            'week_start': '2020-02-10',
            'week_end': '2020-02-16',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.9',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.9'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 18,
                  'total': '3'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '14'
                  },
                  {
                    'stat_id': '2',
                    'value': '21'
                  },
                  {
                    'stat_id': '4',
                    'value': '-10'
                  },
                  {
                    'stat_id': '5',
                    'value': '23'
                  },
                  {
                    'stat_id': '8',
                    'value': '7'
                  },
                  {
                    'stat_id': '12',
                    'value': '0'
                  },
                  {
                    'stat_id': '16',
                    'value': '190'
                  },
                  {
                    'stat_id': '31',
                    'value': '51'
                  },
                  {
                    'stat_id': '32',
                    'value': '49'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '20'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.18'
                  },
                  {
                    'stat_id': '25',
                    'value': '189'
                  },
                  {
                    'stat_id': '24',
                    'value': '209'
                  },
                  {
                    'stat_id': '26',
                    'value': '.904'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.9',
                'team_id': '9',
                'name': 'North Kariya',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/9',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56515160113_e1121f.jpg'
                  }
                ],
                'waiver_priority': 6,
                'number_of_moves': '85',
                'number_of_trades': '1',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '5'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '9',
                    'nickname': 'Downzz',
                    'guid': 'NLHDWLXWGLSKLWSIBESQR4D5AA',
                    'email': 'big_e15@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/4566/38735110836_6c76aa_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 18,
                  'total': '8'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '13'
                  },
                  {
                    'stat_id': '2',
                    'value': '26'
                  },
                  {
                    'stat_id': '4',
                    'value': '4'
                  },
                  {
                    'stat_id': '5',
                    'value': '24'
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
                    'value': '155'
                  },
                  {
                    'stat_id': '31',
                    'value': '57'
                  },
                  {
                    'stat_id': '32',
                    'value': '38'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '9'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.22'
                  },
                  {
                    'stat_id': '25',
                    'value': '121'
                  },
                  {
                    'stat_id': '24',
                    'value': '130'
                  },
                  {
                    'stat_id': '26',
                    'value': '.931'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 19,
            'week_start': '2020-02-17',
            'week_end': '2020-02-23',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.10',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.10'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'is_tied': 1
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 19,
                  'total': '5'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '11'
                  },
                  {
                    'stat_id': '2',
                    'value': '17'
                  },
                  {
                    'stat_id': '4',
                    'value': '-11'
                  },
                  {
                    'stat_id': '5',
                    'value': '18'
                  },
                  {
                    'stat_id': '8',
                    'value': '8'
                  },
                  {
                    'stat_id': '12',
                    'value': '0'
                  },
                  {
                    'stat_id': '16',
                    'value': '200'
                  },
                  {
                    'stat_id': '31',
                    'value': '74'
                  },
                  {
                    'stat_id': '32',
                    'value': '38'
                  },
                  {
                    'stat_id': '19',
                    'value': '4'
                  },
                  {
                    'stat_id': '22',
                    'value': '22'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.77'
                  },
                  {
                    'stat_id': '25',
                    'value': '232'
                  },
                  {
                    'stat_id': '24',
                    'value': '254'
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
              {
                'team_key': '396.l.13492.t.10',
                'team_id': '10',
                'name': 'North York Nylanders',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/10',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/30455746845_db501c0bac.jpg'
                  }
                ],
                'waiver_priority': 1,
                'number_of_moves': '2',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '0'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '10',
                    'nickname': 'Pat',
                    'guid': 'IPISOAQXX37FYSTJIT2CT7KL74',
                    'email': 'pirwin26@gmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/4546/37417984563_5dc741_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 19,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '16'
                  },
                  {
                    'stat_id': '2',
                    'value': '16'
                  },
                  {
                    'stat_id': '4',
                    'value': '-2'
                  },
                  {
                    'stat_id': '5',
                    'value': '26'
                  },
                  {
                    'stat_id': '8',
                    'value': '12'
                  },
                  {
                    'stat_id': '12',
                    'value': '3'
                  },
                  {
                    'stat_id': '16',
                    'value': '101'
                  },
                  {
                    'stat_id': '31',
                    'value': '80'
                  },
                  {
                    'stat_id': '32',
                    'value': '43'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '16'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.93'
                  },
                  {
                    'stat_id': '25',
                    'value': '148'
                  },
                  {
                    'stat_id': '24',
                    'value': '164'
                  },
                  {
                    'stat_id': '26',
                    'value': '.902'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 20,
            'week_start': '2020-02-24',
            'week_end': '2020-03-01',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.14',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.14'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'winner_team_key': '396.l.13492.t.11'
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 20,
                  'total': '6'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '9'
                  },
                  {
                    'stat_id': '2',
                    'value': '20'
                  },
                  {
                    'stat_id': '4',
                    'value': '-8'
                  },
                  {
                    'stat_id': '5',
                    'value': '18'
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
                    'value': '196'
                  },
                  {
                    'stat_id': '31',
                    'value': '48'
                  },
                  {
                    'stat_id': '32',
                    'value': '43'
                  },
                  {
                    'stat_id': '19',
                    'value': '2'
                  },
                  {
                    'stat_id': '22',
                    'value': '14'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.32'
                  },
                  {
                    'stat_id': '25',
                    'value': '158'
                  },
                  {
                    'stat_id': '24',
                    'value': '172'
                  },
                  {
                    'stat_id': '26',
                    'value': '.919'
                  },
                  {
                    'stat_id': '27',
                    'value': '1'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.14',
                'team_id': '14',
                'name': 'Pastrnak For Scoring',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/14',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/f44936e01abb52e381c5de6e298419640bdc128b1220923154eb65ffab896f7f.jpg'
                  }
                ],
                'waiver_priority': 2,
                'number_of_moves': '90',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '14',
                    'nickname': 'DC',
                    'guid': 'SXM4LHDILXF4XGUNV7PKVVH7YY',
                    'email': 'drew_crosby17@yahoo.ca',
                    'image_url': 'https://s.yimg.com/ag/images/4647/27429759489_56f836_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 20,
                  'total': '7'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '12'
                  },
                  {
                    'stat_id': '2',
                    'value': '11'
                  },
                  {
                    'stat_id': '4',
                    'value': '-7'
                  },
                  {
                    'stat_id': '5',
                    'value': '25'
                  },
                  {
                    'stat_id': '8',
                    'value': '8'
                  },
                  {
                    'stat_id': '12',
                    'value': '3'
                  },
                  {
                    'stat_id': '16',
                    'value': '145'
                  },
                  {
                    'stat_id': '31',
                    'value': '83'
                  },
                  {
                    'stat_id': '32',
                    'value': '69'
                  },
                  {
                    'stat_id': '19',
                    'value': '4'
                  },
                  {
                    'stat_id': '22',
                    'value': '14'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.81'
                  },
                  {
                    'stat_id': '25',
                    'value': '137'
                  },
                  {
                    'stat_id': '24',
                    'value': '151'
                  },
                  {
                    'stat_id': '26',
                    'value': '.907'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          },
          {
            'week': 21,
            'week_start': '2020-03-02',
            'week_end': '2020-03-08',
            'status': 'postevent',
            'is_playoffs': '0',
            'is_consolation': '0',
            'is_tied': 0,
            'winner_team_key': '396.l.13492.t.11',
            'stat_winners': [
              {
                'stat_winner': {
                  'stat_id': '1',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '2',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '4',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '5',
                  'winner_team_key': '396.l.13492.t.12'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '8',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '12',
                  'is_tied': 1
                }
              },
              {
                'stat_winner': {
                  'stat_id': '16',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '31',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '32',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '19',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '23',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '26',
                  'winner_team_key': '396.l.13492.t.11'
                }
              },
              {
                'stat_winner': {
                  'stat_id': '27',
                  'winner_team_key': '396.l.13492.t.11'
                }
              }
            ],
            'teams': [
              {
                'team_key': '396.l.13492.t.11',
                'team_id': '11',
                'name': 'Super Duper',
                'is_owned_by_current_login': 1,
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                  }
                ],
                'waiver_priority': 8,
                'number_of_moves': '92',
                'number_of_trades': '2',
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '4'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '11',
                    'nickname': 'Joel',
                    'guid': 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                    'is_current_login': '1',
                    'email': 'jm_canada_eh@hotmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 21,
                  'total': '9'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '9'
                  },
                  {
                    'stat_id': '2',
                    'value': '20'
                  },
                  {
                    'stat_id': '4',
                    'value': '7'
                  },
                  {
                    'stat_id': '5',
                    'value': '30'
                  },
                  {
                    'stat_id': '8',
                    'value': '6'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '180'
                  },
                  {
                    'stat_id': '31',
                    'value': '62'
                  },
                  {
                    'stat_id': '32',
                    'value': '34'
                  },
                  {
                    'stat_id': '19',
                    'value': '3'
                  },
                  {
                    'stat_id': '22',
                    'value': '8'
                  },
                  {
                    'stat_id': '23',
                    'value': '2.26'
                  },
                  {
                    'stat_id': '25',
                    'value': '98'
                  },
                  {
                    'stat_id': '24',
                    'value': '106'
                  },
                  {
                    'stat_id': '26',
                    'value': '.925'
                  },
                  {
                    'stat_id': '27',
                    'value': '1'
                  }
                ]
              },
              {
                'team_key': '396.l.13492.t.12',
                'team_id': '12',
                'name': 'Gritty’s Grinders',
                'url': 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/12',
                'team_logos': [
                  {
                    'size': 'large',
                    'url': 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/44959982251_2ab3ba.jpg'
                  }
                ],
                'waiver_priority': 3,
                'number_of_moves': '20',
                'number_of_trades': 0,
                'roster_adds': {
                  'coverage_type': 'week',
                  'coverage_value': '21',
                  'value': '2'
                },
                'league_scoring_type': 'head',
                'has_draft_grade': 0,
                'managers': [
                  {
                    'manager_id': '12',
                    'nickname': 'Cory Quaresma',
                    'guid': 'NVDADIZ6KCJ6WOEI2RMQTZY3IA',
                    'email': 'cory.quaresma@gmail.com',
                    'image_url': 'https://s.yimg.com/ag/images/4557/37414443143_c66985_64sq.jpg'
                  }
                ],
                'points': {
                  'coverage_type': 'week',
                  'week': 21,
                  'total': '2'
                },
                'stats': [
                  {
                    'stat_id': '1',
                    'value': '14'
                  },
                  {
                    'stat_id': '2',
                    'value': '14'
                  },
                  {
                    'stat_id': '4',
                    'value': '0'
                  },
                  {
                    'stat_id': '5',
                    'value': '34'
                  },
                  {
                    'stat_id': '8',
                    'value': '6'
                  },
                  {
                    'stat_id': '12',
                    'value': '2'
                  },
                  {
                    'stat_id': '16',
                    'value': '76'
                  },
                  {
                    'stat_id': '31',
                    'value': '40'
                  },
                  {
                    'stat_id': '32',
                    'value': '25'
                  },
                  {
                    'stat_id': '19',
                    'value': '1'
                  },
                  {
                    'stat_id': '22',
                    'value': '17'
                  },
                  {
                    'stat_id': '23',
                    'value': '3.38'
                  },
                  {
                    'stat_id': '25',
                    'value': '127'
                  },
                  {
                    'stat_id': '24',
                    'value': '144'
                  },
                  {
                    'stat_id': '26',
                    'value': '.882'
                  },
                  {
                    'stat_id': '27',
                    'value': '0'
                  }
                ]
              }
            ]
          }
        ]
      },
      players: [
        {
          'player_key': '396.p.4002',
          'player_id': '4002',
          'name': {
            'full': 'Claude Giroux',
            'first': 'Claude',
            'last': 'Giroux',
            'ascii_first': 'Claude',
            'ascii_last': 'Giroux'
          },
          'editorial_player_key': 'nhl.p.4002',
          'editorial_team_key': 'nhl.t.15',
          'editorial_team_full_name': 'Philadelphia Flyers',
          'editorial_team_abbr': 'Phi',
          'uniform_number': '28',
          'display_position': 'C,LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/KAX52udL4XbdehbhbjV06w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11182019/4002.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/KAX52udL4XbdehbhbjV06w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11182019/4002.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C',
            'LW',
            'RW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '69'
              },
              {
                'stat_id': '29',
                'value': '69'
              },
              {
                'stat_id': '1',
                'value': '21'
              },
              {
                'stat_id': '2',
                'value': '32'
              },
              {
                'stat_id': '3',
                'value': '53'
              },
              {
                'stat_id': '4',
                'value': '7'
              },
              {
                'stat_id': '5',
                'value': '28'
              },
              {
                'stat_id': '6',
                'value': '7'
              },
              {
                'stat_id': '7',
                'value': '13'
              },
              {
                'stat_id': '8',
                'value': '20'
              },
              {
                'stat_id': '9',
                'value': '1'
              },
              {
                'stat_id': '10',
                'value': '1'
              },
              {
                'stat_id': '11',
                'value': '2'
              },
              {
                'stat_id': '12',
                'value': '6'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '197'
              },
              {
                'stat_id': '15',
                'value': '.107'
              },
              {
                'stat_id': '16',
                'value': '663'
              },
              {
                'stat_id': '17',
                'value': '460'
              },
              {
                'stat_id': '31',
                'value': '45'
              },
              {
                'stat_id': '32',
                'value': '16'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 98
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '32.5',
            'average_round': '3.2',
            'average_cost': '30.3',
            'percent_drafted': '1.00'
          }
        },
        {
          'player_key': '396.p.5363',
          'player_id': '5363',
          'name': {
            'full': 'Gabriel Landeskog',
            'first': 'Gabriel',
            'last': 'Landeskog',
            'ascii_first': 'Gabriel',
            'ascii_last': 'Landeskog'
          },
          'status': 'O',
          'status_full': 'Out',
          'injury_note': 'Leg',
          'editorial_player_key': 'nhl.p.5363',
          'editorial_team_key': 'nhl.t.17',
          'editorial_team_full_name': 'Colorado Avalanche',
          'editorial_team_abbr': 'Col',
          'uniform_number': '92',
          'display_position': 'C,LW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/NT54j3r.Db5VENoS4JL0cg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10242019/5363.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/NT54j3r.Db5VENoS4JL0cg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10242019/5363.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C',
            'LW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '54'
              },
              {
                'stat_id': '29',
                'value': '54'
              },
              {
                'stat_id': '1',
                'value': '21'
              },
              {
                'stat_id': '2',
                'value': '23'
              },
              {
                'stat_id': '3',
                'value': '44'
              },
              {
                'stat_id': '4',
                'value': '-2'
              },
              {
                'stat_id': '5',
                'value': '47'
              },
              {
                'stat_id': '6',
                'value': '6'
              },
              {
                'stat_id': '7',
                'value': '9'
              },
              {
                'stat_id': '8',
                'value': '15'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '4'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '145'
              },
              {
                'stat_id': '15',
                'value': '.145'
              },
              {
                'stat_id': '16',
                'value': '274'
              },
              {
                'stat_id': '17',
                'value': '212'
              },
              {
                'stat_id': '31',
                'value': '86'
              },
              {
                'stat_id': '32',
                'value': '35'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 95
            },
            {
              'delta': '1'
            }
          ],
          'draft_analysis': {
            'average_pick': '35.1',
            'average_round': '3.4',
            'average_cost': '27.0',
            'percent_drafted': '1.00'
          }
        },
        {
          'player_key': '396.p.6083',
          'player_id': '6083',
          'name': {
            'full': 'Andrew Copp',
            'first': 'Andrew',
            'last': 'Copp',
            'ascii_first': 'Andrew',
            'ascii_last': 'Copp'
          },
          'editorial_player_key': 'nhl.p.6083',
          'editorial_team_key': 'nhl.t.28',
          'editorial_team_full_name': 'Winnipeg Jets',
          'editorial_team_abbr': 'Wpg',
          'uniform_number': '9',
          'display_position': 'C,LW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/OcI3XEzHvveT_ApE5iw6Vg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/6083.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/OcI3XEzHvveT_ApE5iw6Vg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/6083.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C',
            'LW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '63'
              },
              {
                'stat_id': '29',
                'value': '63'
              },
              {
                'stat_id': '1',
                'value': '10'
              },
              {
                'stat_id': '2',
                'value': '16'
              },
              {
                'stat_id': '3',
                'value': '26'
              },
              {
                'stat_id': '4',
                'value': '-3'
              },
              {
                'stat_id': '5',
                'value': '10'
              },
              {
                'stat_id': '6',
                'value': '1'
              },
              {
                'stat_id': '7',
                'value': '0'
              },
              {
                'stat_id': '8',
                'value': '1'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '3'
              },
              {
                'stat_id': '11',
                'value': '3'
              },
              {
                'stat_id': '12',
                'value': '5'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '121'
              },
              {
                'stat_id': '15',
                'value': '.083'
              },
              {
                'stat_id': '16',
                'value': '310'
              },
              {
                'stat_id': '17',
                'value': '275'
              },
              {
                'stat_id': '31',
                'value': '59'
              },
              {
                'stat_id': '32',
                'value': '27'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 2
            },
            {
              'delta': '-1'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.3818',
          'player_id': '3818',
          'name': {
            'full': 'James Neal',
            'first': 'James',
            'last': 'Neal',
            'ascii_first': 'James',
            'ascii_last': 'Neal'
          },
          'editorial_player_key': 'nhl.p.3818',
          'editorial_team_key': 'nhl.t.6',
          'editorial_team_full_name': 'Edmonton Oilers',
          'editorial_team_abbr': 'Edm',
          'uniform_number': '18',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/mDSoIWSyFL5wXDZAh5f0og--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3818.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/mDSoIWSyFL5wXDZAh5f0og--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3818.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'LW',
            'RW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '55'
              },
              {
                'stat_id': '29',
                'value': '55'
              },
              {
                'stat_id': '1',
                'value': '19'
              },
              {
                'stat_id': '2',
                'value': '12'
              },
              {
                'stat_id': '3',
                'value': '31'
              },
              {
                'stat_id': '4',
                'value': '-20'
              },
              {
                'stat_id': '5',
                'value': '12'
              },
              {
                'stat_id': '6',
                'value': '12'
              },
              {
                'stat_id': '7',
                'value': '5'
              },
              {
                'stat_id': '8',
                'value': '17'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '112'
              },
              {
                'stat_id': '15',
                'value': '.170'
              },
              {
                'stat_id': '16',
                'value': '11'
              },
              {
                'stat_id': '17',
                'value': '20'
              },
              {
                'stat_id': '31',
                'value': '88'
              },
              {
                'stat_id': '32',
                'value': '17'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 28
            },
            {
              'delta': '-1'
            }
          ],
          'draft_analysis': {
            'average_pick': '150.6',
            'average_round': '13.0',
            'average_cost': '1.0',
            'percent_drafted': '0.12'
          }
        },
        {
          'player_key': '396.p.4693',
          'player_id': '4693',
          'name': {
            'full': 'Zack Kassian',
            'first': 'Zack',
            'last': 'Kassian',
            'ascii_first': 'Zack',
            'ascii_last': 'Kassian'
          },
          'editorial_player_key': 'nhl.p.4693',
          'editorial_team_key': 'nhl.t.6',
          'editorial_team_full_name': 'Edmonton Oilers',
          'editorial_team_abbr': 'Edm',
          'uniform_number': '44',
          'display_position': 'RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/iiSweRuZxum_dXBm2Vae_Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11272019/4693.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/iiSweRuZxum_dXBm2Vae_Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11272019/4693.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'RW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '59'
              },
              {
                'stat_id': '29',
                'value': '59'
              },
              {
                'stat_id': '1',
                'value': '15'
              },
              {
                'stat_id': '2',
                'value': '19'
              },
              {
                'stat_id': '3',
                'value': '34'
              },
              {
                'stat_id': '4',
                'value': '0'
              },
              {
                'stat_id': '5',
                'value': '69'
              },
              {
                'stat_id': '6',
                'value': '0'
              },
              {
                'stat_id': '7',
                'value': '0'
              },
              {
                'stat_id': '8',
                'value': '0'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '99'
              },
              {
                'stat_id': '15',
                'value': '.152'
              },
              {
                'stat_id': '16',
                'value': '1'
              },
              {
                'stat_id': '17',
                'value': '2'
              },
              {
                'stat_id': '31',
                'value': '157'
              },
              {
                'stat_id': '32',
                'value': '8'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 18
            },
            {
              'delta': '1'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.6544',
          'player_id': '6544',
          'name': {
            'full': 'Sammy Blais',
            'first': 'Sammy',
            'last': 'Blais',
            'ascii_first': 'Sammy',
            'ascii_last': 'Blais'
          },
          'editorial_player_key': 'nhl.p.6544',
          'editorial_team_key': 'nhl.t.19',
          'editorial_team_full_name': 'St. Louis Blues',
          'editorial_team_abbr': 'StL',
          'uniform_number': '9',
          'display_position': 'LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/FUNjM5DUbPZ_WMO3IJ39wQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/6544.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/FUNjM5DUbPZ_WMO3IJ39wQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10222019/6544.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'LW',
            'RW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '40'
              },
              {
                'stat_id': '29',
                'value': '40'
              },
              {
                'stat_id': '1',
                'value': '6'
              },
              {
                'stat_id': '2',
                'value': '7'
              },
              {
                'stat_id': '3',
                'value': '13'
              },
              {
                'stat_id': '4',
                'value': '-2'
              },
              {
                'stat_id': '5',
                'value': '20'
              },
              {
                'stat_id': '6',
                'value': '0'
              },
              {
                'stat_id': '7',
                'value': '0'
              },
              {
                'stat_id': '8',
                'value': '0'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '56'
              },
              {
                'stat_id': '15',
                'value': '.107'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '17',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '155'
              },
              {
                'stat_id': '32',
                'value': '15'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 4
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.7117',
          'player_id': '7117',
          'name': {
            'full': 'Mikhail Sergachev',
            'first': 'Mikhail',
            'last': 'Sergachev',
            'ascii_first': 'Mikhail',
            'ascii_last': 'Sergachev'
          },
          'editorial_player_key': 'nhl.p.7117',
          'editorial_team_key': 'nhl.t.20',
          'editorial_team_full_name': 'Tampa Bay Lightning',
          'editorial_team_abbr': 'TB',
          'uniform_number': '98',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/TnbWQK4VTaY38CfQ1mCcPQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/7117.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/TnbWQK4VTaY38CfQ1mCcPQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/7117.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'D'
          ],
          'has_player_notes': 1,
          'player_notes_last_timestamp': 1606490573,
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '70'
              },
              {
                'stat_id': '29',
                'value': '70'
              },
              {
                'stat_id': '1',
                'value': '10'
              },
              {
                'stat_id': '2',
                'value': '24'
              },
              {
                'stat_id': '3',
                'value': '34'
              },
              {
                'stat_id': '4',
                'value': '15'
              },
              {
                'stat_id': '5',
                'value': '58'
              },
              {
                'stat_id': '6',
                'value': '5'
              },
              {
                'stat_id': '7',
                'value': '8'
              },
              {
                'stat_id': '8',
                'value': '13'
              },
              {
                'stat_id': '9',
                'value': '1'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '1'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '118'
              },
              {
                'stat_id': '15',
                'value': '.085'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '17',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '106'
              },
              {
                'stat_id': '32',
                'value': '99'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 74
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '150.6',
            'average_round': '13.2',
            'average_cost': '1.3',
            'percent_drafted': '1.00'
          }
        },
        {
          'player_key': '396.p.5810',
          'player_id': '5810',
          'name': {
            'full': 'Jaccob Slavin',
            'first': 'Jaccob',
            'last': 'Slavin',
            'ascii_first': 'Jaccob',
            'ascii_last': 'Slavin'
          },
          'editorial_player_key': 'nhl.p.5810',
          'editorial_team_key': 'nhl.t.7',
          'editorial_team_full_name': 'Carolina Hurricanes',
          'editorial_team_abbr': 'Car',
          'uniform_number': '74',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/aANwk3sIRgR30E5zKXyrhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5810.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/aANwk3sIRgR30E5zKXyrhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10302019/5810.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'D'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '68'
              },
              {
                'stat_id': '29',
                'value': '68'
              },
              {
                'stat_id': '1',
                'value': '6'
              },
              {
                'stat_id': '2',
                'value': '30'
              },
              {
                'stat_id': '3',
                'value': '36'
              },
              {
                'stat_id': '4',
                'value': '30'
              },
              {
                'stat_id': '5',
                'value': '10'
              },
              {
                'stat_id': '6',
                'value': '0'
              },
              {
                'stat_id': '7',
                'value': '3'
              },
              {
                'stat_id': '8',
                'value': '3'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '1'
              },
              {
                'stat_id': '11',
                'value': '1'
              },
              {
                'stat_id': '12',
                'value': '3'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '145'
              },
              {
                'stat_id': '15',
                'value': '.041'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '17',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '43'
              },
              {
                'stat_id': '32',
                'value': '107'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 66
            },
            {
              'delta': '1'
            }
          ],
          'draft_analysis': {
            'average_pick': '168.4',
            'average_round': '14.5',
            'average_cost': '0.0',
            'percent_drafted': '0.05'
          }
        },
        {
          'player_key': '396.p.6407',
          'player_id': '6407',
          'name': {
            'full': 'Marcus Pettersson',
            'first': 'Marcus',
            'last': 'Pettersson',
            'ascii_first': 'Marcus',
            'ascii_last': 'Pettersson'
          },
          'editorial_player_key': 'nhl.p.6407',
          'editorial_team_key': 'nhl.t.16',
          'editorial_team_full_name': 'Pittsburgh Penguins',
          'editorial_team_abbr': 'Pit',
          'uniform_number': '28',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/Taw.6XA_23omHQr12o32AA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/6407.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/Taw.6XA_23omHQr12o32AA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/6407.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'D'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '69'
              },
              {
                'stat_id': '29',
                'value': '69'
              },
              {
                'stat_id': '1',
                'value': '2'
              },
              {
                'stat_id': '2',
                'value': '20'
              },
              {
                'stat_id': '3',
                'value': '22'
              },
              {
                'stat_id': '4',
                'value': '9'
              },
              {
                'stat_id': '5',
                'value': '35'
              },
              {
                'stat_id': '6',
                'value': '0'
              },
              {
                'stat_id': '7',
                'value': '2'
              },
              {
                'stat_id': '8',
                'value': '2'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '0'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '79'
              },
              {
                'stat_id': '15',
                'value': '.025'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '17',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '106'
              },
              {
                'stat_id': '32',
                'value': '84'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 2
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.4935',
          'player_id': '4935',
          'name': {
            'full': 'Christopher Tanev',
            'first': 'Christopher',
            'last': 'Tanev',
            'ascii_first': 'Christopher',
            'ascii_last': 'Tanev'
          },
          'editorial_player_key': 'nhl.p.4935',
          'editorial_team_key': 'nhl.t.3',
          'editorial_team_full_name': 'Calgary Flames',
          'editorial_team_abbr': 'Cgy',
          'uniform_number': '8',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/SKGVqu6y38qdTUph10uRQg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4935.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/SKGVqu6y38qdTUph10uRQg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4935.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'D'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '69'
              },
              {
                'stat_id': '29',
                'value': '69'
              },
              {
                'stat_id': '1',
                'value': '2'
              },
              {
                'stat_id': '2',
                'value': '18'
              },
              {
                'stat_id': '3',
                'value': '20'
              },
              {
                'stat_id': '4',
                'value': '4'
              },
              {
                'stat_id': '5',
                'value': '41'
              },
              {
                'stat_id': '6',
                'value': '0'
              },
              {
                'stat_id': '7',
                'value': '1'
              },
              {
                'stat_id': '8',
                'value': '1'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '1'
              },
              {
                'stat_id': '11',
                'value': '1'
              },
              {
                'stat_id': '12',
                'value': '1'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '45'
              },
              {
                'stat_id': '15',
                'value': '.044'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '17',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '32'
              },
              {
                'stat_id': '32',
                'value': '159'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 3
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.3357',
          'player_id': '3357',
          'name': {
            'full': 'Ryan Getzlaf',
            'first': 'Ryan',
            'last': 'Getzlaf',
            'ascii_first': 'Ryan',
            'ascii_last': 'Getzlaf'
          },
          'editorial_player_key': 'nhl.p.3357',
          'editorial_team_key': 'nhl.t.25',
          'editorial_team_full_name': 'Anaheim Ducks',
          'editorial_team_abbr': 'Anh',
          'uniform_number': '15',
          'display_position': 'C',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/weglW8XqxA42lQosbgtKyQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/3357.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/weglW8XqxA42lQosbgtKyQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/3357.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '69'
              },
              {
                'stat_id': '29',
                'value': '69'
              },
              {
                'stat_id': '1',
                'value': '13'
              },
              {
                'stat_id': '2',
                'value': '29'
              },
              {
                'stat_id': '3',
                'value': '42'
              },
              {
                'stat_id': '4',
                'value': '-16'
              },
              {
                'stat_id': '5',
                'value': '58'
              },
              {
                'stat_id': '6',
                'value': '3'
              },
              {
                'stat_id': '7',
                'value': '6'
              },
              {
                'stat_id': '8',
                'value': '9'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '5'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '143'
              },
              {
                'stat_id': '15',
                'value': '.091'
              },
              {
                'stat_id': '16',
                'value': '530'
              },
              {
                'stat_id': '17',
                'value': '504'
              },
              {
                'stat_id': '31',
                'value': '125'
              },
              {
                'stat_id': '32',
                'value': '69'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 38
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '167.5',
            'average_round': '14.4',
            'average_cost': '3.3',
            'percent_drafted': '0.05'
          }
        },
        {
          'player_key': '396.p.5981',
          'player_id': '5981',
          'name': {
            'full': 'Aleksander Barkov',
            'first': 'Aleksander',
            'last': 'Barkov',
            'ascii_first': 'Aleksander',
            'ascii_last': 'Barkov'
          },
          'editorial_player_key': 'nhl.p.5981',
          'editorial_team_key': 'nhl.t.26',
          'editorial_team_full_name': 'Florida Panthers',
          'editorial_team_abbr': 'Fla',
          'uniform_number': '16',
          'display_position': 'C',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '66'
              },
              {
                'stat_id': '29',
                'value': '66'
              },
              {
                'stat_id': '1',
                'value': '20'
              },
              {
                'stat_id': '2',
                'value': '42'
              },
              {
                'stat_id': '3',
                'value': '62'
              },
              {
                'stat_id': '4',
                'value': '2'
              },
              {
                'stat_id': '5',
                'value': '18'
              },
              {
                'stat_id': '6',
                'value': '7'
              },
              {
                'stat_id': '7',
                'value': '13'
              },
              {
                'stat_id': '8',
                'value': '20'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '1'
              },
              {
                'stat_id': '11',
                'value': '1'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '172'
              },
              {
                'stat_id': '15',
                'value': '.116'
              },
              {
                'stat_id': '16',
                'value': '653'
              },
              {
                'stat_id': '17',
                'value': '550'
              },
              {
                'stat_id': '31',
                'value': '21'
              },
              {
                'stat_id': '32',
                'value': '35'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 99
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '27.0',
            'average_round': '2.8',
            'average_cost': '40.3',
            'percent_drafted': '1.00'
          }
        },
        {
          'player_key': '396.p.7111',
          'player_id': '7111',
          'name': {
            'full': 'Pierre-Luc Dubois',
            'first': 'Pierre-Luc',
            'last': 'Dubois',
            'ascii_first': 'Pierre-Luc',
            'ascii_last': 'Dubois'
          },
          'editorial_player_key': 'nhl.p.7111',
          'editorial_team_key': 'nhl.t.29',
          'editorial_team_full_name': 'Columbus Blue Jackets',
          'editorial_team_abbr': 'Cls',
          'uniform_number': '18',
          'display_position': 'C',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/zIj_xmNZrN1qO_ns_vquaw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/7111.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/zIj_xmNZrN1qO_ns_vquaw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11142019/7111.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '70'
              },
              {
                'stat_id': '29',
                'value': '70'
              },
              {
                'stat_id': '1',
                'value': '18'
              },
              {
                'stat_id': '2',
                'value': '31'
              },
              {
                'stat_id': '3',
                'value': '49'
              },
              {
                'stat_id': '4',
                'value': '-2'
              },
              {
                'stat_id': '5',
                'value': '49'
              },
              {
                'stat_id': '6',
                'value': '1'
              },
              {
                'stat_id': '7',
                'value': '9'
              },
              {
                'stat_id': '8',
                'value': '10'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '4'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '158'
              },
              {
                'stat_id': '15',
                'value': '.114'
              },
              {
                'stat_id': '16',
                'value': '359'
              },
              {
                'stat_id': '17',
                'value': '446'
              },
              {
                'stat_id': '31',
                'value': '85'
              },
              {
                'stat_id': '32',
                'value': '50'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 67
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '150.1',
            'average_round': '13.2',
            'average_cost': '1.1',
            'percent_drafted': '0.92'
          }
        },
        {
          'player_key': '396.p.5366',
          'player_id': '5366',
          'name': {
            'full': 'Ryan Strome',
            'first': 'Ryan',
            'last': 'Strome',
            'ascii_first': 'Ryan',
            'ascii_last': 'Strome'
          },
          'editorial_player_key': 'nhl.p.5366',
          'editorial_team_key': 'nhl.t.13',
          'editorial_team_full_name': 'New York Rangers',
          'editorial_team_abbr': 'NYR',
          'uniform_number': '16',
          'display_position': 'C,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/McB4Nttu1u4MvZOyXKj9Sg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10012019/5366.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/McB4Nttu1u4MvZOyXKj9Sg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10012019/5366.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C',
            'RW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '70'
              },
              {
                'stat_id': '29',
                'value': '70'
              },
              {
                'stat_id': '1',
                'value': '18'
              },
              {
                'stat_id': '2',
                'value': '41'
              },
              {
                'stat_id': '3',
                'value': '59'
              },
              {
                'stat_id': '4',
                'value': '21'
              },
              {
                'stat_id': '5',
                'value': '48'
              },
              {
                'stat_id': '6',
                'value': '3'
              },
              {
                'stat_id': '7',
                'value': '14'
              },
              {
                'stat_id': '8',
                'value': '17'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '1'
              },
              {
                'stat_id': '11',
                'value': '1'
              },
              {
                'stat_id': '12',
                'value': '3'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '154'
              },
              {
                'stat_id': '15',
                'value': '.117'
              },
              {
                'stat_id': '16',
                'value': '496'
              },
              {
                'stat_id': '17',
                'value': '548'
              },
              {
                'stat_id': '31',
                'value': '45'
              },
              {
                'stat_id': '32',
                'value': '32'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 77
            },
            {
              'delta': '2'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.5254',
          'player_id': '5254',
          'name': {
            'full': 'Dmitry Orlov',
            'first': 'Dmitry',
            'last': 'Orlov',
            'ascii_first': 'Dmitry',
            'ascii_last': 'Orlov'
          },
          'editorial_player_key': 'nhl.p.5254',
          'editorial_team_key': 'nhl.t.23',
          'editorial_team_full_name': 'Washington Capitals',
          'editorial_team_abbr': 'Was',
          'uniform_number': '9',
          'display_position': 'D',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/5.l_sY5gnHqKJNSKg1Z.5Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10182019/5254.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/5.l_sY5gnHqKJNSKg1Z.5Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10182019/5254.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'D'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '69'
              },
              {
                'stat_id': '29',
                'value': '69'
              },
              {
                'stat_id': '1',
                'value': '4'
              },
              {
                'stat_id': '2',
                'value': '23'
              },
              {
                'stat_id': '3',
                'value': '27'
              },
              {
                'stat_id': '4',
                'value': '5'
              },
              {
                'stat_id': '5',
                'value': '36'
              },
              {
                'stat_id': '6',
                'value': '1'
              },
              {
                'stat_id': '7',
                'value': '4'
              },
              {
                'stat_id': '8',
                'value': '5'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '1'
              },
              {
                'stat_id': '11',
                'value': '1'
              },
              {
                'stat_id': '12',
                'value': '2'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '105'
              },
              {
                'stat_id': '15',
                'value': '.038'
              },
              {
                'stat_id': '16',
                'value': '0'
              },
              {
                'stat_id': '17',
                'value': '0'
              },
              {
                'stat_id': '31',
                'value': '106'
              },
              {
                'stat_id': '32',
                'value': '82'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 14
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '-',
            'average_round': '-',
            'average_cost': '-',
            'percent_drafted': '-'
          }
        },
        {
          'player_key': '396.p.5820',
          'player_id': '5820',
          'name': {
            'full': 'Connor Hellebuyck',
            'first': 'Connor',
            'last': 'Hellebuyck',
            'ascii_first': 'Connor',
            'ascii_last': 'Hellebuyck'
          },
          'editorial_player_key': 'nhl.p.5820',
          'editorial_team_key': 'nhl.t.28',
          'editorial_team_full_name': 'Winnipeg Jets',
          'editorial_team_abbr': 'Wpg',
          'uniform_number': '37',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'eligible_positions': [
            'G'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '58'
              },
              {
                'stat_id': '30',
                'value': '58'
              },
              {
                'stat_id': '18',
                'value': '56'
              },
              {
                'stat_id': '19',
                'value': '31'
              },
              {
                'stat_id': '20',
                'value': '21'
              },
              {
                'stat_id': '21',
                'value': '0'
              },
              {
                'stat_id': '22',
                'value': '140'
              },
              {
                'stat_id': '23',
                'value': '2.57'
              },
              {
                'stat_id': '24',
                'value': '1796'
              },
              {
                'stat_id': '25',
                'value': '1656'
              },
              {
                'stat_id': '26',
                'value': '.922'
              },
              {
                'stat_id': '27',
                'value': '6'
              },
              {
                'stat_id': '28',
                'value': '3,268:33'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 97
            },
            {
              'delta': '0'
            }
          ],
          'draft_analysis': {
            'average_pick': '74.5',
            'average_round': '6.8',
            'average_cost': '5.3',
            'percent_drafted': '1.00'
          }
        },
        {
          'player_key': '396.p.3231',
          'player_id': '3231',
          'name': {
            'full': 'Mike Smith',
            'first': 'Mike',
            'last': 'Smith',
            'ascii_first': 'Mike',
            'ascii_last': 'Smith'
          },
          'editorial_player_key': 'nhl.p.3231',
          'editorial_team_key': 'nhl.t.6',
          'editorial_team_full_name': 'Edmonton Oilers',
          'editorial_team_abbr': 'Edm',
          'uniform_number': '41',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/amLbnSXwAuxkHV7De7saxA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3231.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/amLbnSXwAuxkHV7De7saxA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/3231.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'eligible_positions': [
            'G'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '39'
              },
              {
                'stat_id': '30',
                'value': '39'
              },
              {
                'stat_id': '18',
                'value': '37'
              },
              {
                'stat_id': '19',
                'value': '19'
              },
              {
                'stat_id': '20',
                'value': '12'
              },
              {
                'stat_id': '21',
                'value': '0'
              },
              {
                'stat_id': '22',
                'value': '106'
              },
              {
                'stat_id': '23',
                'value': '2.95'
              },
              {
                'stat_id': '24',
                'value': '1087'
              },
              {
                'stat_id': '25',
                'value': '981'
              },
              {
                'stat_id': '26',
                'value': '.902'
              },
              {
                'stat_id': '27',
                'value': '1'
              },
              {
                'stat_id': '28',
                'value': '2,156:51'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 44
            },
            {
              'delta': '1'
            }
          ],
          'draft_analysis': {
            'average_pick': '168.7',
            'average_round': '14.8',
            'average_cost': '1.6',
            'percent_drafted': '0.14'
          }
        },
        {
          'player_key': '396.p.4901',
          'player_id': '4901',
          'name': {
            'full': 'Sergei Bobrovsky',
            'first': 'Sergei',
            'last': 'Bobrovsky',
            'ascii_first': 'Sergei',
            'ascii_last': 'Bobrovsky'
          },
          'editorial_player_key': 'nhl.p.4901',
          'editorial_team_key': 'nhl.t.26',
          'editorial_team_full_name': 'Florida Panthers',
          'editorial_team_abbr': 'Fla',
          'uniform_number': '72',
          'display_position': 'G',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/Mi9JbNoFOiKolfvgF19nhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4901.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/Mi9JbNoFOiKolfvgF19nhA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10022019/4901.png',
          'is_undroppable': '0',
          'position_type': 'G',
          'eligible_positions': [
            'G'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '50'
              },
              {
                'stat_id': '30',
                'value': '50'
              },
              {
                'stat_id': '18',
                'value': '49'
              },
              {
                'stat_id': '19',
                'value': '23'
              },
              {
                'stat_id': '20',
                'value': '19'
              },
              {
                'stat_id': '21',
                'value': '0'
              },
              {
                'stat_id': '22',
                'value': '151'
              },
              {
                'stat_id': '23',
                'value': '3.23'
              },
              {
                'stat_id': '24',
                'value': '1505'
              },
              {
                'stat_id': '25',
                'value': '1354'
              },
              {
                'stat_id': '26',
                'value': '.900'
              },
              {
                'stat_id': '27',
                'value': '1'
              },
              {
                'stat_id': '28',
                'value': '2,805:59'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 89
            },
            {
              'delta': '-4'
            }
          ],
          'draft_analysis': {
            'average_pick': '22.0',
            'average_round': '2.3',
            'average_cost': '41.9',
            'percent_drafted': '1.00'
          }
        },
        {
          'player_key': '396.p.4471',
          'player_id': '4471',
          'name': {
            'full': 'Steven Stamkos',
            'first': 'Steven',
            'last': 'Stamkos',
            'ascii_first': 'Steven',
            'ascii_last': 'Stamkos'
          },
          'status': 'O',
          'status_full': 'Out',
          'injury_note': 'Abdomen',
          'editorial_player_key': 'nhl.p.4471',
          'editorial_team_key': 'nhl.t.20',
          'editorial_team_full_name': 'Tampa Bay Lightning',
          'editorial_team_abbr': 'TB',
          'uniform_number': '91',
          'display_position': 'C,LW,RW',
          'headshot': {
            'url': 'https://s.yimg.com/iu/api/res/1.2/4ziRPxiWa36w2aODTCRyeg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/4471.png',
            'size': 'small'
          },
          'image_url': 'https://s.yimg.com/iu/api/res/1.2/4ziRPxiWa36w2aODTCRyeg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/10162019/4471.png',
          'is_undroppable': '0',
          'position_type': 'P',
          'eligible_positions': [
            'C',
            'LW',
            'RW'
          ],
          'stats': {
            'coverage_type': 'season',
            'coverage_value': '2019',
            'stats': [
              {
                'stat_id': '0',
                'value': '57'
              },
              {
                'stat_id': '29',
                'value': '57'
              },
              {
                'stat_id': '1',
                'value': '29'
              },
              {
                'stat_id': '2',
                'value': '37'
              },
              {
                'stat_id': '3',
                'value': '66'
              },
              {
                'stat_id': '4',
                'value': '14'
              },
              {
                'stat_id': '5',
                'value': '22'
              },
              {
                'stat_id': '6',
                'value': '10'
              },
              {
                'stat_id': '7',
                'value': '9'
              },
              {
                'stat_id': '8',
                'value': '19'
              },
              {
                'stat_id': '9',
                'value': '0'
              },
              {
                'stat_id': '10',
                'value': '0'
              },
              {
                'stat_id': '11',
                'value': '0'
              },
              {
                'stat_id': '12',
                'value': '6'
              },
              {
                'stat_id': '13',
                'value': '-'
              },
              {
                'stat_id': '14',
                'value': '176'
              },
              {
                'stat_id': '15',
                'value': '.165'
              },
              {
                'stat_id': '16',
                'value': '365'
              },
              {
                'stat_id': '17',
                'value': '307'
              },
              {
                'stat_id': '31',
                'value': '69'
              },
              {
                'stat_id': '32',
                'value': '38'
              }
            ]
          },
          'percent_owned': [
            {
              'coverage_type': 'week',
              'week': '21'
            },
            {
              'value': 71
            },
            {
              'delta': '-21'
            }
          ],
          'draft_analysis': {
            'average_pick': '12.2',
            'average_round': '1.4',
            'average_cost': '42.6',
            'percent_drafted': '1.00'
          }
        }
      ]
    }
  },
  components: {
    TeamHeader,
    FilterMenu,
    Player
  },
  methods: {
    getRoster: function () {
      let self = this
      Axios.post('/api/yahoo/teams/fetch', {
        team_key: [
          self.$route.params.game_id +
            '.l.' +
            self.$route.params.league_id +
            '.t.' +
            self.$route.params.team_id
        ],
        subresources: ['stats', 'standings', 'roster', 'matchups']
      }).then((response) => {
        console.log(JSON.stringify(response.data))
        self.team = response.data[0]
        let playerKeys = response.data[0].roster.map(player => {
          return player.player_key
        })
        this.getPlayers(playerKeys)
      })
        .catch((error) => {
          console.log('error', error)
        })
    },
    getPlayers: function (keys) {
      let self = this
      Axios.post('/api/yahoo/players/fetch', {
        player_keys: keys,
        subresources: ['stats', 'percent_owned', 'draft_analysis']
      })
        .then(response => {
          console.log(JSON.stringify(response.data))
          self.players = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    roster: function () {
      let positions = Array.from(new Set(this.$store.state.categories.map(category => {
        return category.position_type
      })))
      let positionsObj = positions.map(position => {
        return {'position_type': position, players: [], stats: []}
      })
      this.players.forEach(player => {
        positionsObj.forEach(position => {
          if (position.position_type === player.position_type) {
            position.players.push(player)
          }
        })
      })
      this.$store.state.categories.forEach(category => {
        positionsObj.forEach(position => {
          if (position.position_type === category.position_type) {
            position.stats.push(category)
          }
        })
      })
      return positionsObj
    }
  },
  mounted () {
    this.getRoster()
  }
}
</script>
