<template>
  <div>
    <div
      class="bg-white shadow overflow-hidden sm:rounded-lg mb-10"
      v-for="(player_type, i) in roster"
      :key="i"
    >
      <!-- <TeamHeader :team="team" ></TeamHeader> -->
      <!-- <FilterMenu></FilterMenu> -->
      <table class="min-w-full divide-y divide-gray-200" x-max="1">
        <thead>
          <tr>
            <th
              scope="col"
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pos
            </th>
            <th
              scope="col"
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              v-for="(category, i) in player_type.stats"
              :key="i"
            >
              {{ category.display_name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <Player
            v-for="player in player_type.players"
            :key="player.player_id"
            :player="player"
            :team="team"
            :stats="player.stats"
            :allCategories="false"
          ></Player>
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
      team: [
        {
          team_key: '403.l.3898.t.12',
          team_id: '12',
          name: 'Super Duper',
          is_owned_by_current_login: 1,
          url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
          team_logos: [
            {
              size: 'large',
              url:
                'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
            }
          ],
          waiver_priority: 14,
          number_of_moves: '58',
          number_of_trades: '2',
          roster_adds: {
            coverage_type: 'week',
            coverage_value: '17',
            value: '0'
          },
          clinched_playoffs: 1,
          league_scoring_type: 'head',
          has_draft_grade: 0,
          managers: [
            {
              manager_id: '12',
              nickname: 'Joel',
              guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
              is_current_login: '1',
              email: 'jm_canada_eh@hotmail.com',
              image_url:
                'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
              felo_score: '878',
              felo_tier: 'platinum'
            }
          ],
          stats: [
            {
              stat_id: '1',
              value: '192'
            },
            {
              stat_id: '2',
              value: '325'
            },
            {
              stat_id: '4',
              value: '62'
            },
            {
              stat_id: '5',
              value: '388'
            },
            {
              stat_id: '8',
              value: '159'
            },
            {
              stat_id: '12',
              value: '33'
            },
            {
              stat_id: '16',
              value: '2848'
            },
            {
              stat_id: '31',
              value: '956'
            },
            {
              stat_id: '32',
              value: '653'
            },
            {
              stat_id: '19',
              value: '42'
            },
            {
              stat_id: '22',
              value: '226'
            },
            {
              stat_id: '23',
              value: '2.77'
            },
            {
              stat_id: '25',
              value: '2258'
            },
            {
              stat_id: '24',
              value: '2484'
            },
            {
              stat_id: '26',
              value: '.909'
            },
            {
              stat_id: '27',
              value: '4'
            }
          ],
          points: {
            coverage_type: 'season',
            season: '2020',
            total: '204'
          },
          standings: {
            rank: 3,
            playoff_seed: '2',
            outcome_totals: {
              wins: '93',
              losses: '58',
              ties: '18',
              percentage: '.604'
            }
          },
          roster: [
            {
              player_key: '403.p.3982',
              player_id: '3982',
              name: {
                full: 'Nicklas Backstrom',
                first: 'Nicklas',
                last: 'Backstrom',
                ascii_first: 'Nicklas',
                ascii_last: 'Backstrom'
              },
              editorial_player_key: 'nhl.p.3982',
              editorial_team_key: 'nhl.t.23',
              editorial_team_full_name: 'Washington Capitals',
              editorial_team_abbr: 'Was',
              uniform_number: '19',
              display_position: 'C',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/MACXTbued75xXR.sBOTO0A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3982.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/MACXTbued75xXR.sBOTO0A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3982.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620745735,
              selected_position: 'C'
            },
            {
              player_key: '403.p.5981',
              player_id: '5981',
              name: {
                full: 'Aleksander Barkov',
                first: 'Aleksander',
                last: 'Barkov',
                ascii_first: 'Aleksander',
                ascii_last: 'Barkov'
              },
              editorial_player_key: 'nhl.p.5981',
              editorial_team_key: 'nhl.t.26',
              editorial_team_full_name: 'Florida Panthers',
              editorial_team_abbr: 'Fla',
              uniform_number: '16',
              display_position: 'C',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'Util'],
              selected_position: 'C'
            },
            {
              player_key: '403.p.5363',
              player_id: '5363',
              name: {
                full: 'Gabriel Landeskog',
                first: 'Gabriel',
                last: 'Landeskog',
                ascii_first: 'Gabriel',
                ascii_last: 'Landeskog'
              },
              editorial_player_key: 'nhl.p.5363',
              editorial_team_key: 'nhl.t.17',
              editorial_team_full_name: 'Colorado Avalanche',
              editorial_team_abbr: 'Col',
              uniform_number: '92',
              display_position: 'C,LW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/w5sVzML8wS3Cdfl.9YiR2g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/5363.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/w5sVzML8wS3Cdfl.9YiR2g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/5363.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'LW', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620913079,
              selected_position: 'LW'
            },
            {
              player_key: '403.p.4002',
              player_id: '4002',
              name: {
                full: 'Claude Giroux',
                first: 'Claude',
                last: 'Giroux',
                ascii_first: 'Claude',
                ascii_last: 'Giroux'
              },
              editorial_player_key: 'nhl.p.4002',
              editorial_team_key: 'nhl.t.15',
              editorial_team_full_name: 'Philadelphia Flyers',
              editorial_team_abbr: 'Phi',
              uniform_number: '28',
              display_position: 'C,LW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/mW6Uq9ZosbSZZU0I6.GzRA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03052021/4002.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/mW6Uq9ZosbSZZU0I6.GzRA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03052021/4002.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'LW', 'Util'],
              selected_position: 'LW'
            },
            {
              player_key: '403.p.6386',
              player_id: '6386',
              name: {
                full: 'Nick Schmaltz',
                first: 'Nick',
                last: 'Schmaltz',
                ascii_first: 'Nick',
                ascii_last: 'Schmaltz'
              },
              status: 'O',
              status_full: 'Out',
              injury_note: 'Concussion',
              editorial_player_key: 'nhl.p.6386',
              editorial_team_key: 'nhl.t.24',
              editorial_team_full_name: 'Arizona Coyotes',
              editorial_team_abbr: 'Ari',
              uniform_number: '8',
              display_position: 'C,RW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/Z9VAH_AlqoVMw0ff8f.Y2A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01282021/6386.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/Z9VAH_AlqoVMw0ff8f.Y2A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01282021/6386.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'RW', 'Util', 'IR+'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620412116,
              selected_position: 'RW'
            },
            {
              player_key: '403.p.6002',
              player_id: '6002',
              name: {
                full: 'Andre Burakovsky',
                first: 'Andre',
                last: 'Burakovsky',
                ascii_first: 'Andre',
                ascii_last: 'Burakovsky'
              },
              editorial_player_key: 'nhl.p.6002',
              editorial_team_key: 'nhl.t.17',
              editorial_team_full_name: 'Colorado Avalanche',
              editorial_team_abbr: 'Col',
              uniform_number: '95',
              display_position: 'LW,RW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/mIi6tq3JjGrjp5A29OsGEQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/6002.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/mIi6tq3JjGrjp5A29OsGEQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/6002.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'LW',
              eligible_positions: ['LW', 'RW', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620999680,
              selected_position: 'RW'
            },
            {
              player_key: '403.p.5227',
              player_id: '5227',
              name: {
                full: 'Brayden McNabb',
                first: 'Brayden',
                last: 'McNabb',
                ascii_first: 'Brayden',
                ascii_last: 'McNabb'
              },
              editorial_player_key: 'nhl.p.5227',
              editorial_team_key: 'nhl.t.58',
              editorial_team_full_name: 'Vegas Golden Knights',
              editorial_team_abbr: 'VGK',
              uniform_number: '3',
              display_position: 'D',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/0DObnf4RGwklLpM19o.NCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02042021/5227.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/0DObnf4RGwklLpM19o.NCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02042021/5227.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'D',
              eligible_positions: ['D', 'Util'],
              selected_position: 'D'
            },
            {
              player_key: '403.p.5659',
              player_id: '5659',
              name: {
                full: 'Brian Dumoulin',
                first: 'Brian',
                last: 'Dumoulin',
                ascii_first: 'Brian',
                ascii_last: 'Dumoulin'
              },
              editorial_player_key: 'nhl.p.5659',
              editorial_team_key: 'nhl.t.16',
              editorial_team_full_name: 'Pittsburgh Penguins',
              editorial_team_abbr: 'Pit',
              uniform_number: '8',
              display_position: 'D',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/n7DkfxWI.BvU8Vg0InFK4g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/5659.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/n7DkfxWI.BvU8Vg0InFK4g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/5659.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'D',
              eligible_positions: ['D', 'Util'],
              selected_position: 'D'
            },
            {
              player_key: '403.p.6476',
              player_id: '6476',
              name: {
                full: 'Devon Toews',
                first: 'Devon',
                last: 'Toews',
                ascii_first: 'Devon',
                ascii_last: 'Toews'
              },
              editorial_player_key: 'nhl.p.6476',
              editorial_team_key: 'nhl.t.17',
              editorial_team_full_name: 'Colorado Avalanche',
              editorial_team_abbr: 'Col',
              uniform_number: '7',
              display_position: 'D',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/1yN7f94Wo9VKobfSFx_6pw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01192021/6476.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/1yN7f94Wo9VKobfSFx_6pw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01192021/6476.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'D',
              eligible_positions: ['D', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620913318,
              selected_position: 'D'
            },
            {
              player_key: '403.p.5263',
              player_id: '5263',
              name: {
                full: 'Ben Chiarot',
                first: 'Ben',
                last: 'Chiarot',
                ascii_first: 'Ben',
                ascii_last: 'Chiarot'
              },
              editorial_player_key: 'nhl.p.5263',
              editorial_team_key: 'nhl.t.10',
              editorial_team_full_name: 'Montreal Canadiens',
              editorial_team_abbr: 'Mon',
              uniform_number: '8',
              display_position: 'D',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/EvhKchUATIC6ZwadJpjfIQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11122019/5263.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/EvhKchUATIC6ZwadJpjfIQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11122019/5263.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'D',
              eligible_positions: ['D', 'Util'],
              selected_position: 'D'
            },
            {
              player_key: '403.p.3898',
              player_id: '3898',
              name: {
                full: 'David Krejci',
                first: 'David',
                last: 'Krejci',
                ascii_first: 'David',
                ascii_last: 'Krejci'
              },
              editorial_player_key: 'nhl.p.3898',
              editorial_team_key: 'nhl.t.1',
              editorial_team_full_name: 'Boston Bruins',
              editorial_team_abbr: 'Bos',
              uniform_number: '46',
              display_position: 'C',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/h2ufJObb_KVF8wB4n4_gCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3898.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/h2ufJObb_KVF8wB4n4_gCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3898.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'Util'],
              selected_position: 'Util'
            },
            {
              player_key: '403.p.5029',
              player_id: '5029',
              name: {
                full: 'Johan Larsson',
                first: 'Johan',
                last: 'Larsson',
                ascii_first: 'Johan',
                ascii_last: 'Larsson'
              },
              status: 'O',
              status_full: 'Out',
              injury_note: 'Undisclosed',
              editorial_player_key: 'nhl.p.5029',
              editorial_team_key: 'nhl.t.24',
              editorial_team_full_name: 'Arizona Coyotes',
              editorial_team_abbr: 'Ari',
              uniform_number: '22',
              display_position: 'C,LW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/tvIV8tgyX_7wUcmxAuHutA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11252019/5029.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/tvIV8tgyX_7wUcmxAuHutA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11252019/5029.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'LW', 'Util', 'IR+'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620454774,
              selected_position: 'BN'
            },
            {
              player_key: '403.p.3985',
              player_id: '3985',
              name: {
                full: 'Joe Pavelski',
                first: 'Joe',
                last: 'Pavelski',
                ascii_first: 'Joe',
                ascii_last: 'Pavelski'
              },
              editorial_player_key: 'nhl.p.3985',
              editorial_team_key: 'nhl.t.9',
              editorial_team_full_name: 'Dallas Stars',
              editorial_team_abbr: 'Dal',
              uniform_number: '16',
              display_position: 'C,RW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/HqVf8KUuyVlWOq5bI4MIvw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/3985.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/HqVf8KUuyVlWOq5bI4MIvw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/3985.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'RW', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620743312,
              selected_position: 'BN'
            },
            {
              player_key: '403.p.5375',
              player_id: '5375',
              name: {
                full: 'Jamie Oleksiak',
                first: 'Jamie',
                last: 'Oleksiak',
                ascii_first: 'Jamie',
                ascii_last: 'Oleksiak'
              },
              editorial_player_key: 'nhl.p.5375',
              editorial_team_key: 'nhl.t.9',
              editorial_team_full_name: 'Dallas Stars',
              editorial_team_abbr: 'Dal',
              uniform_number: '2',
              display_position: 'D',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/hp9SHpIaaUGXxVqyuFqu9A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/5375.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/hp9SHpIaaUGXxVqyuFqu9A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/5375.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'D',
              eligible_positions: ['D', 'Util'],
              selected_position: 'BN'
            },
            {
              player_key: '403.p.7114',
              player_id: '7114',
              name: {
                full: 'Matthew Tkachuk',
                first: 'Matthew',
                last: 'Tkachuk',
                ascii_first: 'Matthew',
                ascii_last: 'Tkachuk'
              },
              editorial_player_key: 'nhl.p.7114',
              editorial_team_key: 'nhl.t.3',
              editorial_team_full_name: 'Calgary Flames',
              editorial_team_abbr: 'Cgy',
              uniform_number: '19',
              display_position: 'LW,RW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/dzS4ZL1up3PVpcGq9huemQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02172021/7114.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/dzS4ZL1up3PVpcGq9huemQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02172021/7114.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'LW',
              eligible_positions: ['LW', 'RW', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620999190,
              selected_position: 'BN'
            },
            {
              player_key: '403.p.6024',
              player_id: '6024',
              name: {
                full: 'Tristan Jarry',
                first: 'Tristan',
                last: 'Jarry',
                ascii_first: 'Tristan',
                ascii_last: 'Jarry'
              },
              editorial_player_key: 'nhl.p.6024',
              editorial_team_key: 'nhl.t.16',
              editorial_team_full_name: 'Pittsburgh Penguins',
              editorial_team_abbr: 'Pit',
              uniform_number: '35',
              display_position: 'G',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/kixY.Ta0koElGo4UzhYa1w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03092021/6024.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/kixY.Ta0koElGo4UzhYa1w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03092021/6024.png',
              is_undroppable: '0',
              position_type: 'G',
              primary_position: 'G',
              eligible_positions: ['G'],
              has_player_notes: 1,
              has_recent_player_notes: 1,
              player_notes_last_timestamp: 1621195462,
              selected_position: 'G'
            },
            {
              player_key: '403.p.5820',
              player_id: '5820',
              name: {
                full: 'Connor Hellebuyck',
                first: 'Connor',
                last: 'Hellebuyck',
                ascii_first: 'Connor',
                ascii_last: 'Hellebuyck'
              },
              editorial_player_key: 'nhl.p.5820',
              editorial_team_key: 'nhl.t.28',
              editorial_team_full_name: 'Winnipeg Jets',
              editorial_team_abbr: 'Wpg',
              uniform_number: '37',
              display_position: 'G',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
              is_undroppable: '0',
              position_type: 'G',
              primary_position: 'G',
              eligible_positions: ['G'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1621047777,
              selected_position: 'G'
            },
            {
              player_key: '403.p.6109',
              player_id: '6109',
              name: {
                full: 'Calvin Petersen',
                first: 'Calvin',
                last: 'Petersen',
                ascii_first: 'Calvin',
                ascii_last: 'Petersen'
              },
              editorial_player_key: 'nhl.p.6109',
              editorial_team_key: 'nhl.t.8',
              editorial_team_full_name: 'Los Angeles Kings',
              editorial_team_abbr: 'LA',
              uniform_number: '40',
              display_position: 'G',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/I7mxy6oi1dY8lJbZvLi_bQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/6109.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/I7mxy6oi1dY8lJbZvLi_bQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/6109.png',
              is_undroppable: '0',
              position_type: 'G',
              primary_position: 'G',
              eligible_positions: ['G'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1620892722,
              selected_position: 'BN'
            },
            {
              player_key: '403.p.4471',
              player_id: '4471',
              name: {
                full: 'Steven Stamkos',
                first: 'Steven',
                last: 'Stamkos',
                ascii_first: 'Steven',
                ascii_last: 'Stamkos'
              },
              editorial_player_key: 'nhl.p.4471',
              editorial_team_key: 'nhl.t.20',
              editorial_team_full_name: 'Tampa Bay Lightning',
              editorial_team_abbr: 'TB',
              uniform_number: '91',
              display_position: 'C,LW,RW',
              headshot: {
                url:
                  'https://s.yimg.com/iu/api/res/1.2/o15GdP7l084eucefl6MoWA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02032021/4471.png',
                size: 'small'
              },
              image_url:
                'https://s.yimg.com/iu/api/res/1.2/o15GdP7l084eucefl6MoWA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02032021/4471.png',
              is_undroppable: '0',
              position_type: 'P',
              primary_position: 'C',
              eligible_positions: ['C', 'LW', 'RW', 'Util'],
              has_player_notes: 1,
              player_notes_last_timestamp: 1621096826,
              selected_position: 'IR+'
            }
          ],
          matchups: [
            {
              week: '1',
              week_start: '2021-01-13',
              week_end: '2021-01-24',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.4',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '403.l.3898.t.4'
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '1',
                    total: '5'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '16'
                    },
                    {
                      stat_id: '2',
                      value: '28'
                    },
                    {
                      stat_id: '4',
                      value: '6'
                    },
                    {
                      stat_id: '5',
                      value: '52'
                    },
                    {
                      stat_id: '8',
                      value: '18'
                    },
                    {
                      stat_id: '12',
                      value: '5'
                    },
                    {
                      stat_id: '16',
                      value: '240'
                    },
                    {
                      stat_id: '31',
                      value: '87'
                    },
                    {
                      stat_id: '32',
                      value: '47'
                    },
                    {
                      stat_id: '19',
                      value: '5'
                    },
                    {
                      stat_id: '22',
                      value: '22'
                    },
                    {
                      stat_id: '23',
                      value: '2.41'
                    },
                    {
                      stat_id: '25',
                      value: '262'
                    },
                    {
                      stat_id: '24',
                      value: '284'
                    },
                    {
                      stat_id: '26',
                      value: '.923'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.4',
                  team_id: '4',
                  name: 'Don’t Toews Me Bro!',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/4',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_2.png'
                    }
                  ],
                  waiver_priority: 9,
                  number_of_moves: '45',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '4',
                      nickname: 'Harvey Milne',
                      guid: '6HG3VNJ5OWLOIV7CJHKBKUBUTM',
                      email: 'x_pac6@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '656',
                      felo_tier: 'silver'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '1',
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '25'
                    },
                    {
                      stat_id: '2',
                      value: '34'
                    },
                    {
                      stat_id: '4',
                      value: '3'
                    },
                    {
                      stat_id: '5',
                      value: '59'
                    },
                    {
                      stat_id: '8',
                      value: '21'
                    },
                    {
                      stat_id: '12',
                      value: '5'
                    },
                    {
                      stat_id: '16',
                      value: '177'
                    },
                    {
                      stat_id: '31',
                      value: '84'
                    },
                    {
                      stat_id: '32',
                      value: '63'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '13'
                    },
                    {
                      stat_id: '23',
                      value: '2.05'
                    },
                    {
                      stat_id: '25',
                      value: '136'
                    },
                    {
                      stat_id: '24',
                      value: '149'
                    },
                    {
                      stat_id: '26',
                      value: '.913'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                }
              ]
            },
            {
              week: 2,
              week_start: '2021-01-25',
              week_end: '2021-01-31',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.5',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 2,
                    total: '4'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '10'
                    },
                    {
                      stat_id: '2',
                      value: '21'
                    },
                    {
                      stat_id: '4',
                      value: '17'
                    },
                    {
                      stat_id: '5',
                      value: '35'
                    },
                    {
                      stat_id: '8',
                      value: '13'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '145'
                    },
                    {
                      stat_id: '31',
                      value: '30'
                    },
                    {
                      stat_id: '32',
                      value: '31'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '11'
                    },
                    {
                      stat_id: '23',
                      value: '3.61'
                    },
                    {
                      stat_id: '25',
                      value: '82'
                    },
                    {
                      stat_id: '24',
                      value: '93'
                    },
                    {
                      stat_id: '26',
                      value: '.882'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.5',
                  team_id: '5',
                  name: 'Dumpster Fire',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/5',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/8a3be9b71a13371758e52c2e1e32ebabf1e8145f34449ac3fa2ed0544353d1a9.jpg'
                    }
                  ],
                  waiver_priority: 13,
                  number_of_moves: '28',
                  number_of_trades: '6',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '5',
                      nickname: 'Cory Quaresma',
                      guid: 'NVDADIZ6KCJ6WOEI2RMQTZY3IA',
                      email: 'cory.quaresma@gmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/7e6876b9-7fed-4bc1-ab11-1fe378671349_64sq.jpg',
                      felo_score: '510',
                      felo_tier: 'bronze'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 2,
                    total: '8'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '12'
                    },
                    {
                      stat_id: '2',
                      value: '22'
                    },
                    {
                      stat_id: '4',
                      value: '-7'
                    },
                    {
                      stat_id: '5',
                      value: '17'
                    },
                    {
                      stat_id: '8',
                      value: '18'
                    },
                    {
                      stat_id: '12',
                      value: '3'
                    },
                    {
                      stat_id: '16',
                      value: '58'
                    },
                    {
                      stat_id: '31',
                      value: '34'
                    },
                    {
                      stat_id: '32',
                      value: '24'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '14'
                    },
                    {
                      stat_id: '23',
                      value: '2.71'
                    },
                    {
                      stat_id: '25',
                      value: '127'
                    },
                    {
                      stat_id: '24',
                      value: '141'
                    },
                    {
                      stat_id: '26',
                      value: '.901'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 3,
              week_start: '2021-02-01',
              week_end: '2021-02-07',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 3,
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '11'
                    },
                    {
                      stat_id: '2',
                      value: '20'
                    },
                    {
                      stat_id: '4',
                      value: '12'
                    },
                    {
                      stat_id: '5',
                      value: '33'
                    },
                    {
                      stat_id: '8',
                      value: '9'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '129'
                    },
                    {
                      stat_id: '31',
                      value: '57'
                    },
                    {
                      stat_id: '32',
                      value: '33'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '7'
                    },
                    {
                      stat_id: '23',
                      value: '2.28'
                    },
                    {
                      stat_id: '25',
                      value: '88'
                    },
                    {
                      stat_id: '24',
                      value: '95'
                    },
                    {
                      stat_id: '26',
                      value: '.926'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.6',
                  team_id: '6',
                  name: 'Laser Falcons',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/6',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24957944639_a8c0e68e13.jpg'
                    }
                  ],
                  waiver_priority: 5,
                  number_of_moves: '43',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '6',
                      nickname: 'T. Roscoe',
                      guid: 'CNCYZPYD3YL4YGNQG6UH4N4WAI',
                      email: 'tkiely42@yahoo.com',
                      image_url:
                        'https://s.yimg.com/ag/images/4730/24365090257_d58d3c_64sq.jpg',
                      felo_score: '594',
                      felo_tier: 'bronze'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 3,
                    total: '3'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '9'
                    },
                    {
                      stat_id: '2',
                      value: '20'
                    },
                    {
                      stat_id: '4',
                      value: '16'
                    },
                    {
                      stat_id: '5',
                      value: '4'
                    },
                    {
                      stat_id: '8',
                      value: '5'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '84'
                    },
                    {
                      stat_id: '31',
                      value: '29'
                    },
                    {
                      stat_id: '32',
                      value: '36'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '17'
                    },
                    {
                      stat_id: '23',
                      value: '3.39'
                    },
                    {
                      stat_id: '25',
                      value: '133'
                    },
                    {
                      stat_id: '24',
                      value: '150'
                    },
                    {
                      stat_id: '26',
                      value: '.887'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 4,
              week_start: '2021-02-08',
              week_end: '2021-02-14',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.7',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 4,
                    total: '4'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '11'
                    },
                    {
                      stat_id: '2',
                      value: '15'
                    },
                    {
                      stat_id: '4',
                      value: '-4'
                    },
                    {
                      stat_id: '5',
                      value: '20'
                    },
                    {
                      stat_id: '8',
                      value: '12'
                    },
                    {
                      stat_id: '12',
                      value: '0'
                    },
                    {
                      stat_id: '16',
                      value: '106'
                    },
                    {
                      stat_id: '31',
                      value: '57'
                    },
                    {
                      stat_id: '32',
                      value: '31'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '9'
                    },
                    {
                      stat_id: '23',
                      value: '2.23'
                    },
                    {
                      stat_id: '25',
                      value: '112'
                    },
                    {
                      stat_id: '24',
                      value: '121'
                    },
                    {
                      stat_id: '26',
                      value: '.926'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.7',
                  team_id: '7',
                  name: 'leafs nation',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/7',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_10.png'
                    }
                  ],
                  waiver_priority: 10,
                  number_of_moves: '71',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '7',
                      nickname: 'Allen',
                      guid: 'E67HKVCPRMXPXZ52ER3WH4M6NM',
                      email: 'allen24342003@yahoo.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '843',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 4,
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '13'
                    },
                    {
                      stat_id: '2',
                      value: '15'
                    },
                    {
                      stat_id: '4',
                      value: '11'
                    },
                    {
                      stat_id: '5',
                      value: '17'
                    },
                    {
                      stat_id: '8',
                      value: '10'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '123'
                    },
                    {
                      stat_id: '31',
                      value: '49'
                    },
                    {
                      stat_id: '32',
                      value: '34'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '9'
                    },
                    {
                      stat_id: '23',
                      value: '2.20'
                    },
                    {
                      stat_id: '25',
                      value: '110'
                    },
                    {
                      stat_id: '24',
                      value: '119'
                    },
                    {
                      stat_id: '26',
                      value: '.924'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 5,
              week_start: '2021-02-15',
              week_end: '2021-02-21',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.8'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.8'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 5,
                    total: '10'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '10'
                    },
                    {
                      stat_id: '2',
                      value: '17'
                    },
                    {
                      stat_id: '4',
                      value: '-7'
                    },
                    {
                      stat_id: '5',
                      value: '14'
                    },
                    {
                      stat_id: '8',
                      value: '6'
                    },
                    {
                      stat_id: '12',
                      value: '3'
                    },
                    {
                      stat_id: '16',
                      value: '79'
                    },
                    {
                      stat_id: '31',
                      value: '44'
                    },
                    {
                      stat_id: '32',
                      value: '35'
                    },
                    {
                      stat_id: '19',
                      value: '4'
                    },
                    {
                      stat_id: '22',
                      value: '18'
                    },
                    {
                      stat_id: '23',
                      value: '3.02'
                    },
                    {
                      stat_id: '25',
                      value: '186'
                    },
                    {
                      stat_id: '24',
                      value: '204'
                    },
                    {
                      stat_id: '26',
                      value: '.912'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.8',
                  team_id: '8',
                  name: 'No Longer Jasworx',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/8',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_5.png'
                    }
                  ],
                  waiver_priority: 7,
                  number_of_moves: '2',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '8',
                      nickname: 'Justin',
                      guid: '7C3GHHXWLQHEXZBUENYFC3JTXA',
                      email: 'justindeyell@gmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '459',
                      felo_tier: 'bronze'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 5,
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '6'
                    },
                    {
                      stat_id: '2',
                      value: '13'
                    },
                    {
                      stat_id: '4',
                      value: '-9'
                    },
                    {
                      stat_id: '5',
                      value: '23'
                    },
                    {
                      stat_id: '8',
                      value: '5'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '27'
                    },
                    {
                      stat_id: '31',
                      value: '31'
                    },
                    {
                      stat_id: '32',
                      value: '22'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '10'
                    },
                    {
                      stat_id: '23',
                      value: '2.20'
                    },
                    {
                      stat_id: '25',
                      value: '103'
                    },
                    {
                      stat_id: '24',
                      value: '113'
                    },
                    {
                      stat_id: '26',
                      value: '.912'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 6,
              week_start: '2021-02-22',
              week_end: '2021-02-28',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.9'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.9'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.9'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.9'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 6,
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '14'
                    },
                    {
                      stat_id: '2',
                      value: '19'
                    },
                    {
                      stat_id: '4',
                      value: '9'
                    },
                    {
                      stat_id: '5',
                      value: '33'
                    },
                    {
                      stat_id: '8',
                      value: '8'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '181'
                    },
                    {
                      stat_id: '31',
                      value: '73'
                    },
                    {
                      stat_id: '32',
                      value: '47'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '17'
                    },
                    {
                      stat_id: '23',
                      value: '2.86'
                    },
                    {
                      stat_id: '25',
                      value: '159'
                    },
                    {
                      stat_id: '24',
                      value: '176'
                    },
                    {
                      stat_id: '26',
                      value: '.903'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.9',
                  team_id: '9',
                  name: 'North Kariya',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/9',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56515160113_e1121f.jpg'
                    }
                  ],
                  waiver_priority: 2,
                  number_of_moves: '68',
                  number_of_trades: '4',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '9',
                      nickname: 'Downzz',
                      guid: 'NLHDWLXWGLSKLWSIBESQR4D5AA',
                      email: 'big_e15@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/4566/38735110836_6c76aa_64sq.jpg',
                      felo_score: '623',
                      felo_tier: 'silver'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 6,
                    total: '4'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '8'
                    },
                    {
                      stat_id: '2',
                      value: '23'
                    },
                    {
                      stat_id: '4',
                      value: '-2'
                    },
                    {
                      stat_id: '5',
                      value: '22'
                    },
                    {
                      stat_id: '8',
                      value: '9'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '105'
                    },
                    {
                      stat_id: '31',
                      value: '67'
                    },
                    {
                      stat_id: '32',
                      value: '37'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '12'
                    },
                    {
                      stat_id: '23',
                      value: '2.25'
                    },
                    {
                      stat_id: '25',
                      value: '151'
                    },
                    {
                      stat_id: '24',
                      value: '163'
                    },
                    {
                      stat_id: '26',
                      value: '.926'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 7,
              week_start: '2021-03-01',
              week_end: '2021-03-07',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '403.l.3898.t.10'
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 7,
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '15'
                    },
                    {
                      stat_id: '2',
                      value: '22'
                    },
                    {
                      stat_id: '4',
                      value: '3'
                    },
                    {
                      stat_id: '5',
                      value: '8'
                    },
                    {
                      stat_id: '8',
                      value: '12'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '230'
                    },
                    {
                      stat_id: '31',
                      value: '56'
                    },
                    {
                      stat_id: '32',
                      value: '54'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '19'
                    },
                    {
                      stat_id: '23',
                      value: '4.38'
                    },
                    {
                      stat_id: '25',
                      value: '96'
                    },
                    {
                      stat_id: '24',
                      value: '115'
                    },
                    {
                      stat_id: '26',
                      value: '.835'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.10',
                  team_id: '10',
                  name: 'North York Nylanders',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/10',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/30455746845_db501c0bac.jpg'
                    }
                  ],
                  waiver_priority: 4,
                  number_of_moves: '9',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '10',
                      nickname: 'Pat',
                      guid: 'IPISOAQXX37FYSTJIT2CT7KL74',
                      email: 'pirwin26@gmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/4546/37417984563_5dc741_64sq.jpg',
                      felo_score: '705',
                      felo_tier: 'gold'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 7,
                    total: '6'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '9'
                    },
                    {
                      stat_id: '2',
                      value: '17'
                    },
                    {
                      stat_id: '4',
                      value: '-1'
                    },
                    {
                      stat_id: '5',
                      value: '35'
                    },
                    {
                      stat_id: '8',
                      value: '7'
                    },
                    {
                      stat_id: '12',
                      value: '0'
                    },
                    {
                      stat_id: '16',
                      value: '120'
                    },
                    {
                      stat_id: '31',
                      value: '73'
                    },
                    {
                      stat_id: '32',
                      value: '46'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '20'
                    },
                    {
                      stat_id: '23',
                      value: '2.71'
                    },
                    {
                      stat_id: '25',
                      value: '181'
                    },
                    {
                      stat_id: '24',
                      value: '201'
                    },
                    {
                      stat_id: '26',
                      value: '.900'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                }
              ]
            },
            {
              week: 8,
              week_start: '2021-03-08',
              week_end: '2021-03-14',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 8,
                    total: '6'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '12'
                    },
                    {
                      stat_id: '2',
                      value: '16'
                    },
                    {
                      stat_id: '4',
                      value: '-1'
                    },
                    {
                      stat_id: '5',
                      value: '29'
                    },
                    {
                      stat_id: '8',
                      value: '6'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '189'
                    },
                    {
                      stat_id: '31',
                      value: '55'
                    },
                    {
                      stat_id: '32',
                      value: '53'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '17'
                    },
                    {
                      stat_id: '23',
                      value: '3.29'
                    },
                    {
                      stat_id: '25',
                      value: '149'
                    },
                    {
                      stat_id: '24',
                      value: '166'
                    },
                    {
                      stat_id: '26',
                      value: '.898'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.11',
                  team_id: '11',
                  name: 'Pastrnak For Scoring',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/11',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/f44936e01abb52e381c5de6e298419640bdc128b1220923154eb65ffab896f7f.jpg'
                    }
                  ],
                  waiver_priority: 1,
                  number_of_moves: '60',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '11',
                      nickname: 'DC',
                      guid: 'SXM4LHDILXF4XGUNV7PKVVH7YY',
                      email: 'drew_crosby17@yahoo.ca',
                      image_url:
                        'https://s.yimg.com/ag/images/4647/27429759489_56f836_64sq.jpg',
                      felo_score: '752',
                      felo_tier: 'gold'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 8,
                    total: '5'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '9'
                    },
                    {
                      stat_id: '2',
                      value: '17'
                    },
                    {
                      stat_id: '4',
                      value: '-12'
                    },
                    {
                      stat_id: '5',
                      value: '8'
                    },
                    {
                      stat_id: '8',
                      value: '9'
                    },
                    {
                      stat_id: '12',
                      value: '3'
                    },
                    {
                      stat_id: '16',
                      value: '96'
                    },
                    {
                      stat_id: '31',
                      value: '61'
                    },
                    {
                      stat_id: '32',
                      value: '56'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '29'
                    },
                    {
                      stat_id: '23',
                      value: '4.36'
                    },
                    {
                      stat_id: '25',
                      value: '168'
                    },
                    {
                      stat_id: '24',
                      value: '197'
                    },
                    {
                      stat_id: '26',
                      value: '.853'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 9,
              week_start: '2021-03-15',
              week_end: '2021-03-21',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 9,
                    total: '10'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '16'
                    },
                    {
                      stat_id: '2',
                      value: '27'
                    },
                    {
                      stat_id: '4',
                      value: '7'
                    },
                    {
                      stat_id: '5',
                      value: '31'
                    },
                    {
                      stat_id: '8',
                      value: '17'
                    },
                    {
                      stat_id: '12',
                      value: '4'
                    },
                    {
                      stat_id: '16',
                      value: '235'
                    },
                    {
                      stat_id: '31',
                      value: '64'
                    },
                    {
                      stat_id: '32',
                      value: '43'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '19'
                    },
                    {
                      stat_id: '23',
                      value: '2.70'
                    },
                    {
                      stat_id: '25',
                      value: '209'
                    },
                    {
                      stat_id: '24',
                      value: '228'
                    },
                    {
                      stat_id: '26',
                      value: '.917'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.14',
                  team_id: '14',
                  name: 'Titty Twisters',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/14',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55193119802_a339ed.jpg'
                    }
                  ],
                  waiver_priority: 8,
                  number_of_moves: '64',
                  number_of_trades: '7',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '14',
                      nickname: 'Adam',
                      guid: '4RZB22PP5ZMMAKHXLIF5SW23OY',
                      email: 'adam@madacomm.ca',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '710',
                      felo_tier: 'gold'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 9,
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '13'
                    },
                    {
                      stat_id: '2',
                      value: '24'
                    },
                    {
                      stat_id: '4',
                      value: '5'
                    },
                    {
                      stat_id: '5',
                      value: '30'
                    },
                    {
                      stat_id: '8',
                      value: '11'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '117'
                    },
                    {
                      stat_id: '31',
                      value: '85'
                    },
                    {
                      stat_id: '32',
                      value: '34'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '12'
                    },
                    {
                      stat_id: '23',
                      value: '2.71'
                    },
                    {
                      stat_id: '25',
                      value: '107'
                    },
                    {
                      stat_id: '24',
                      value: '119'
                    },
                    {
                      stat_id: '26',
                      value: '.899'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 10,
              week_start: '2021-03-22',
              week_end: '2021-03-28',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '403.l.3898.t.12'
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 10,
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '12'
                    },
                    {
                      stat_id: '2',
                      value: '21'
                    },
                    {
                      stat_id: '4',
                      value: '2'
                    },
                    {
                      stat_id: '5',
                      value: '12'
                    },
                    {
                      stat_id: '8',
                      value: '14'
                    },
                    {
                      stat_id: '12',
                      value: '0'
                    },
                    {
                      stat_id: '16',
                      value: '167'
                    },
                    {
                      stat_id: '31',
                      value: '51'
                    },
                    {
                      stat_id: '32',
                      value: '32'
                    },
                    {
                      stat_id: '19',
                      value: '4'
                    },
                    {
                      stat_id: '22',
                      value: '6'
                    },
                    {
                      stat_id: '23',
                      value: '1.51'
                    },
                    {
                      stat_id: '25',
                      value: '110'
                    },
                    {
                      stat_id: '24',
                      value: '116'
                    },
                    {
                      stat_id: '26',
                      value: '.948'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.13',
                  team_id: '13',
                  name: 'The Mighty Towels',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/13',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56476601481_d01d0b.jpg'
                    }
                  ],
                  waiver_priority: 6,
                  number_of_moves: '60',
                  number_of_trades: '7',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '13',
                      nickname: 'Richard P',
                      guid: 'PRWHXQ2M23K5GQIWX4JT6BDEQE',
                      email: 'benchie420@yahoo.ca',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '575',
                      felo_tier: 'bronze'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 10,
                    total: '6'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '13'
                    },
                    {
                      stat_id: '2',
                      value: '19'
                    },
                    {
                      stat_id: '4',
                      value: '12'
                    },
                    {
                      stat_id: '5',
                      value: '30'
                    },
                    {
                      stat_id: '8',
                      value: '9'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '96'
                    },
                    {
                      stat_id: '31',
                      value: '56'
                    },
                    {
                      stat_id: '32',
                      value: '39'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '9'
                    },
                    {
                      stat_id: '23',
                      value: '1.76'
                    },
                    {
                      stat_id: '25',
                      value: '135'
                    },
                    {
                      stat_id: '24',
                      value: '144'
                    },
                    {
                      stat_id: '26',
                      value: '.938'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 11,
              week_start: '2021-03-29',
              week_end: '2021-04-04',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 11,
                    total: '9'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '9'
                    },
                    {
                      stat_id: '2',
                      value: '20'
                    },
                    {
                      stat_id: '4',
                      value: '-11'
                    },
                    {
                      stat_id: '5',
                      value: '12'
                    },
                    {
                      stat_id: '8',
                      value: '8'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '162'
                    },
                    {
                      stat_id: '31',
                      value: '64'
                    },
                    {
                      stat_id: '32',
                      value: '32'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '2'
                    },
                    {
                      stat_id: '23',
                      value: '0.83'
                    },
                    {
                      stat_id: '25',
                      value: '71'
                    },
                    {
                      stat_id: '24',
                      value: '73'
                    },
                    {
                      stat_id: '26',
                      value: '.973'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.1',
                  team_id: '1',
                  name: 'Junior Mints',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/1',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24708063344_6a67da08aa.jpg'
                    }
                  ],
                  waiver_priority: 3,
                  number_of_moves: '76',
                  number_of_trades: '3',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '1',
                      nickname: 'Dusty',
                      guid: '7VGL7NQLHHAERB675CCJ3ECVGY',
                      is_commissioner: '1',
                      email: 'lepi182@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/1876/43465071884_433417_64sq.jpg',
                      felo_score: '829',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 11,
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '3'
                    },
                    {
                      stat_id: '2',
                      value: '12'
                    },
                    {
                      stat_id: '4',
                      value: '-7'
                    },
                    {
                      stat_id: '5',
                      value: '20'
                    },
                    {
                      stat_id: '8',
                      value: '5'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '122'
                    },
                    {
                      stat_id: '31',
                      value: '58'
                    },
                    {
                      stat_id: '32',
                      value: '22'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '8'
                    },
                    {
                      stat_id: '23',
                      value: '2.04'
                    },
                    {
                      stat_id: '25',
                      value: '115'
                    },
                    {
                      stat_id: '24',
                      value: '123'
                    },
                    {
                      stat_id: '26',
                      value: '.935'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 12,
              week_start: '2021-04-05',
              week_end: '2021-04-11',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 12,
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '10'
                    },
                    {
                      stat_id: '2',
                      value: '19'
                    },
                    {
                      stat_id: '4',
                      value: '1'
                    },
                    {
                      stat_id: '5',
                      value: '27'
                    },
                    {
                      stat_id: '8',
                      value: '8'
                    },
                    {
                      stat_id: '12',
                      value: '3'
                    },
                    {
                      stat_id: '16',
                      value: '255'
                    },
                    {
                      stat_id: '31',
                      value: '85'
                    },
                    {
                      stat_id: '32',
                      value: '63'
                    },
                    {
                      stat_id: '19',
                      value: '5'
                    },
                    {
                      stat_id: '22',
                      value: '12'
                    },
                    {
                      stat_id: '23',
                      value: '1.99'
                    },
                    {
                      stat_id: '25',
                      value: '154'
                    },
                    {
                      stat_id: '24',
                      value: '166'
                    },
                    {
                      stat_id: '26',
                      value: '.928'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.2',
                  team_id: '2',
                  name: 'Aborted Abortions',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/2',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55179360532_22e79a.jpg'
                    }
                  ],
                  waiver_priority: 12,
                  number_of_moves: '56',
                  number_of_trades: '7',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '2',
                      nickname: '-- hidden --',
                      guid: 'EDD7EUCBYK6WZQAKL7MIEPWLSM',
                      image_url:
                        'https://s.yimg.com/ag/images/4527/37420082523_4c924c_64sq.jpg',
                      felo_score: '789',
                      felo_tier: 'gold'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 12,
                    total: '4'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '13'
                    },
                    {
                      stat_id: '2',
                      value: '20'
                    },
                    {
                      stat_id: '4',
                      value: '-10'
                    },
                    {
                      stat_id: '5',
                      value: '17'
                    },
                    {
                      stat_id: '8',
                      value: '8'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '177'
                    },
                    {
                      stat_id: '31',
                      value: '79'
                    },
                    {
                      stat_id: '32',
                      value: '55'
                    },
                    {
                      stat_id: '19',
                      value: '4'
                    },
                    {
                      stat_id: '22',
                      value: '11'
                    },
                    {
                      stat_id: '23',
                      value: '1.78'
                    },
                    {
                      stat_id: '25',
                      value: '178'
                    },
                    {
                      stat_id: '24',
                      value: '189'
                    },
                    {
                      stat_id: '26',
                      value: '.942'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                }
              ]
            },
            {
              week: 13,
              week_start: '2021-04-12',
              week_end: '2021-04-18',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.3'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.3'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '403.l.3898.t.12'
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 13,
                    total: '10'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '13'
                    },
                    {
                      stat_id: '2',
                      value: '26'
                    },
                    {
                      stat_id: '4',
                      value: '24'
                    },
                    {
                      stat_id: '5',
                      value: '30'
                    },
                    {
                      stat_id: '8',
                      value: '10'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '207'
                    },
                    {
                      stat_id: '31',
                      value: '44'
                    },
                    {
                      stat_id: '32',
                      value: '34'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '12'
                    },
                    {
                      stat_id: '23',
                      value: '2.40'
                    },
                    {
                      stat_id: '25',
                      value: '127'
                    },
                    {
                      stat_id: '24',
                      value: '139'
                    },
                    {
                      stat_id: '26',
                      value: '.914'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.3',
                  team_id: '3',
                  name: 'Dickheads',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/3',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/38445937905_996daa.jpg'
                    }
                  ],
                  waiver_priority: 11,
                  number_of_moves: '24',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '3',
                      nickname: 'derick',
                      guid: 'HWK2IENJ65PE3B356A4OTL7T6Q',
                      email: 'db_diablo@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '528',
                      felo_tier: 'bronze'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 13,
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '11'
                    },
                    {
                      stat_id: '2',
                      value: '13'
                    },
                    {
                      stat_id: '4',
                      value: '-11'
                    },
                    {
                      stat_id: '5',
                      value: '32'
                    },
                    {
                      stat_id: '8',
                      value: '4'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '109'
                    },
                    {
                      stat_id: '31',
                      value: '51'
                    },
                    {
                      stat_id: '32',
                      value: '29'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '6'
                    },
                    {
                      stat_id: '23',
                      value: '3.02'
                    },
                    {
                      stat_id: '25',
                      value: '42'
                    },
                    {
                      stat_id: '24',
                      value: '48'
                    },
                    {
                      stat_id: '26',
                      value: '.875'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 14,
              week_start: '2021-04-19',
              week_end: '2021-04-25',
              status: 'postevent',
              is_playoffs: '1',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '403.l.3898.t.12'
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 14,
                    total: '8'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '12'
                    },
                    {
                      stat_id: '2',
                      value: '13'
                    },
                    {
                      stat_id: '4',
                      value: '8'
                    },
                    {
                      stat_id: '5',
                      value: '26'
                    },
                    {
                      stat_id: '8',
                      value: '1'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '205'
                    },
                    {
                      stat_id: '31',
                      value: '62'
                    },
                    {
                      stat_id: '32',
                      value: '34'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '13'
                    },
                    {
                      stat_id: '23',
                      value: '3.11'
                    },
                    {
                      stat_id: '25',
                      value: '120'
                    },
                    {
                      stat_id: '24',
                      value: '133'
                    },
                    {
                      stat_id: '26',
                      value: '.902'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.4',
                  team_id: '4',
                  name: 'Don’t Toews Me Bro!',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/4',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_2.png'
                    }
                  ],
                  waiver_priority: 9,
                  number_of_moves: '45',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '4',
                      nickname: 'Harvey Milne',
                      guid: '6HG3VNJ5OWLOIV7CJHKBKUBUTM',
                      email: 'x_pac6@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '656',
                      felo_tier: 'silver'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 14,
                    total: '3'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '9'
                    },
                    {
                      stat_id: '2',
                      value: '13'
                    },
                    {
                      stat_id: '4',
                      value: '-1'
                    },
                    {
                      stat_id: '5',
                      value: '23'
                    },
                    {
                      stat_id: '8',
                      value: '2'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '78'
                    },
                    {
                      stat_id: '31',
                      value: '78'
                    },
                    {
                      stat_id: '32',
                      value: '44'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '19'
                    },
                    {
                      stat_id: '23',
                      value: '4.09'
                    },
                    {
                      stat_id: '25',
                      value: '134'
                    },
                    {
                      stat_id: '24',
                      value: '153'
                    },
                    {
                      stat_id: '26',
                      value: '.876'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 15,
              week_start: '2021-04-26',
              week_end: '2021-05-02',
              status: 'postevent',
              is_playoffs: '1',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.1',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '403.l.3898.t.12'
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 15,
                    total: '3'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '9'
                    },
                    {
                      stat_id: '2',
                      value: '22'
                    },
                    {
                      stat_id: '4',
                      value: '-4'
                    },
                    {
                      stat_id: '5',
                      value: '14'
                    },
                    {
                      stat_id: '8',
                      value: '10'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '184'
                    },
                    {
                      stat_id: '31',
                      value: '72'
                    },
                    {
                      stat_id: '32',
                      value: '46'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '25'
                    },
                    {
                      stat_id: '23',
                      value: '3.77'
                    },
                    {
                      stat_id: '25',
                      value: '183'
                    },
                    {
                      stat_id: '24',
                      value: '208'
                    },
                    {
                      stat_id: '26',
                      value: '.880'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.1',
                  team_id: '1',
                  name: 'Junior Mints',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/1',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24708063344_6a67da08aa.jpg'
                    }
                  ],
                  waiver_priority: 3,
                  number_of_moves: '76',
                  number_of_trades: '3',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '1',
                      nickname: 'Dusty',
                      guid: '7VGL7NQLHHAERB675CCJ3ECVGY',
                      is_commissioner: '1',
                      email: 'lepi182@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/1876/43465071884_433417_64sq.jpg',
                      felo_score: '829',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 15,
                    total: '9'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '10'
                    },
                    {
                      stat_id: '2',
                      value: '24'
                    },
                    {
                      stat_id: '4',
                      value: '11'
                    },
                    {
                      stat_id: '5',
                      value: '14'
                    },
                    {
                      stat_id: '8',
                      value: '6'
                    },
                    {
                      stat_id: '12',
                      value: '3'
                    },
                    {
                      stat_id: '16',
                      value: '193'
                    },
                    {
                      stat_id: '31',
                      value: '79'
                    },
                    {
                      stat_id: '32',
                      value: '39'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '19'
                    },
                    {
                      stat_id: '23',
                      value: '3.33'
                    },
                    {
                      stat_id: '25',
                      value: '149'
                    },
                    {
                      stat_id: '24',
                      value: '168'
                    },
                    {
                      stat_id: '26',
                      value: '.887'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            },
            {
              week: 16,
              week_start: '2021-05-03',
              week_end: '2021-05-08',
              status: 'postevent',
              is_playoffs: '1',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '403.l.3898.t.12',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '403.l.3898.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '403.l.3898.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '403.l.3898.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '403.l.3898.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    is_tied: 1
                  }
                }
              ],
              teams: [
                {
                  team_key: '403.l.3898.t.12',
                  team_id: '12',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '58',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg',
                      felo_score: '878',
                      felo_tier: 'platinum'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 16,
                    total: '8'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '12'
                    },
                    {
                      stat_id: '2',
                      value: '21'
                    },
                    {
                      stat_id: '4',
                      value: '1'
                    },
                    {
                      stat_id: '5',
                      value: '12'
                    },
                    {
                      stat_id: '8',
                      value: '8'
                    },
                    {
                      stat_id: '12',
                      value: '4'
                    },
                    {
                      stat_id: '16',
                      value: '136'
                    },
                    {
                      stat_id: '31',
                      value: '54'
                    },
                    {
                      stat_id: '32',
                      value: '39'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '17'
                    },
                    {
                      stat_id: '23',
                      value: '3.02'
                    },
                    {
                      stat_id: '25',
                      value: '150'
                    },
                    {
                      stat_id: '24',
                      value: '167'
                    },
                    {
                      stat_id: '26',
                      value: '.898'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '403.l.3898.t.6',
                  team_id: '6',
                  name: 'Laser Falcons',
                  url: 'https://hockey.fantasysports.yahoo.com/hockey/3898/6',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24957944639_a8c0e68e13.jpg'
                    }
                  ],
                  waiver_priority: 5,
                  number_of_moves: '43',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '17',
                    value: '0'
                  },
                  clinched_playoffs: 1,
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '6',
                      nickname: 'T. Roscoe',
                      guid: 'CNCYZPYD3YL4YGNQG6UH4N4WAI',
                      email: 'tkiely42@yahoo.com',
                      image_url:
                        'https://s.yimg.com/ag/images/4730/24365090257_d58d3c_64sq.jpg',
                      felo_score: '594',
                      felo_tier: 'bronze'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: 16,
                    total: '3'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '12'
                    },
                    {
                      stat_id: '2',
                      value: '19'
                    },
                    {
                      stat_id: '4',
                      value: '-9'
                    },
                    {
                      stat_id: '5',
                      value: '20'
                    },
                    {
                      stat_id: '8',
                      value: '7'
                    },
                    {
                      stat_id: '12',
                      value: '0'
                    },
                    {
                      stat_id: '16',
                      value: '150'
                    },
                    {
                      stat_id: '31',
                      value: '55'
                    },
                    {
                      stat_id: '32',
                      value: '34'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '12'
                    },
                    {
                      stat_id: '23',
                      value: '3.92'
                    },
                    {
                      stat_id: '25',
                      value: '70'
                    },
                    {
                      stat_id: '24',
                      value: '82'
                    },
                    {
                      stat_id: '26',
                      value: '.854'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      players: [
        {
          player_key: '403.p.3982',
          player_id: '3982',
          name: {
            full: 'Nicklas Backstrom',
            first: 'Nicklas',
            last: 'Backstrom',
            ascii_first: 'Nicklas',
            ascii_last: 'Backstrom'
          },
          editorial_player_key: 'nhl.p.3982',
          editorial_team_key: 'nhl.t.23',
          editorial_team_full_name: 'Washington Capitals',
          editorial_team_abbr: 'Was',
          uniform_number: '19',
          display_position: 'C',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/MACXTbued75xXR.sBOTO0A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3982.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/MACXTbued75xXR.sBOTO0A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3982.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620745735,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '55' },
              { stat_id: '29', value: '55' },
              { stat_id: '1', value: '15' },
              { stat_id: '2', value: '38' },
              { stat_id: '3', value: '53' },
              { stat_id: '4', value: '0' },
              { stat_id: '5', value: '14' },
              { stat_id: '6', value: '5' },
              { stat_id: '7', value: '17' },
              { stat_id: '8', value: '22' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '0' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '91' },
              { stat_id: '15', value: '.165' },
              { stat_id: '16', value: '353' },
              { stat_id: '17', value: '378' },
              { stat_id: '31', value: '25' },
              { stat_id: '32', value: '27' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 89 },
            { delta: '-1' }
          ],
          draft_analysis: {
            average_pick: '114.4',
            average_round: '10.2',
            average_cost: '3.5',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.5981',
          player_id: '5981',
          name: {
            full: 'Aleksander Barkov',
            first: 'Aleksander',
            last: 'Barkov',
            ascii_first: 'Aleksander',
            ascii_last: 'Barkov'
          },
          editorial_player_key: 'nhl.p.5981',
          editorial_team_key: 'nhl.t.26',
          editorial_team_full_name: 'Florida Panthers',
          editorial_team_abbr: 'Fla',
          uniform_number: '16',
          display_position: 'C',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/kPeshF.ykvVKXM.b3vP4Dw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11052019/5981.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '50' },
              { stat_id: '29', value: '50' },
              { stat_id: '1', value: '26' },
              { stat_id: '2', value: '32' },
              { stat_id: '3', value: '58' },
              { stat_id: '4', value: '12' },
              { stat_id: '5', value: '14' },
              { stat_id: '6', value: '7' },
              { stat_id: '7', value: '12' },
              { stat_id: '8', value: '19' },
              { stat_id: '9', value: '1' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '1' },
              { stat_id: '12', value: '6' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '176' },
              { stat_id: '15', value: '.148' },
              { stat_id: '16', value: '563' },
              { stat_id: '17', value: '463' },
              { stat_id: '31', value: '31' },
              { stat_id: '32', value: '37' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 96 },
            { delta: '-1' }
          ],
          draft_analysis: {
            average_pick: '46.3',
            average_round: '4.4',
            average_cost: '28.5',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.5363',
          player_id: '5363',
          name: {
            full: 'Gabriel Landeskog',
            first: 'Gabriel',
            last: 'Landeskog',
            ascii_first: 'Gabriel',
            ascii_last: 'Landeskog'
          },
          editorial_player_key: 'nhl.p.5363',
          editorial_team_key: 'nhl.t.17',
          editorial_team_full_name: 'Colorado Avalanche',
          editorial_team_abbr: 'Col',
          uniform_number: '92',
          display_position: 'C,LW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/w5sVzML8wS3Cdfl.9YiR2g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/5363.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/w5sVzML8wS3Cdfl.9YiR2g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/5363.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C', 'LW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620913079,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '54' },
              { stat_id: '29', value: '54' },
              { stat_id: '1', value: '20' },
              { stat_id: '2', value: '32' },
              { stat_id: '3', value: '52' },
              { stat_id: '4', value: '14' },
              { stat_id: '5', value: '34' },
              { stat_id: '6', value: '9' },
              { stat_id: '7', value: '6' },
              { stat_id: '8', value: '15' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '8' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '155' },
              { stat_id: '15', value: '.129' },
              { stat_id: '16', value: '288' },
              { stat_id: '17', value: '221' },
              { stat_id: '31', value: '81' },
              { stat_id: '32', value: '28' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 98 },
            { delta: '-1' }
          ],
          draft_analysis: {
            average_pick: '34.8',
            average_round: '3.4',
            average_cost: '28.7',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.4002',
          player_id: '4002',
          name: {
            full: 'Claude Giroux',
            first: 'Claude',
            last: 'Giroux',
            ascii_first: 'Claude',
            ascii_last: 'Giroux'
          },
          editorial_player_key: 'nhl.p.4002',
          editorial_team_key: 'nhl.t.15',
          editorial_team_full_name: 'Philadelphia Flyers',
          editorial_team_abbr: 'Phi',
          uniform_number: '28',
          display_position: 'C,LW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/mW6Uq9ZosbSZZU0I6.GzRA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03052021/4002.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/mW6Uq9ZosbSZZU0I6.GzRA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03052021/4002.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C', 'LW'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '54' },
              { stat_id: '29', value: '54' },
              { stat_id: '1', value: '16' },
              { stat_id: '2', value: '27' },
              { stat_id: '3', value: '43' },
              { stat_id: '4', value: '-4' },
              { stat_id: '5', value: '12' },
              { stat_id: '6', value: '1' },
              { stat_id: '7', value: '10' },
              { stat_id: '8', value: '11' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '2' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '120' },
              { stat_id: '15', value: '.133' },
              { stat_id: '16', value: '484' },
              { stat_id: '17', value: '328' },
              { stat_id: '31', value: '32' },
              { stat_id: '32', value: '6' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 86 },
            { delta: '-1' }
          ],
          draft_analysis: {
            average_pick: '63.6',
            average_round: '5.9',
            average_cost: '7.3',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.6386',
          player_id: '6386',
          name: {
            full: 'Nick Schmaltz',
            first: 'Nick',
            last: 'Schmaltz',
            ascii_first: 'Nick',
            ascii_last: 'Schmaltz'
          },
          status: 'O',
          status_full: 'Out',
          injury_note: 'Concussion',
          editorial_player_key: 'nhl.p.6386',
          editorial_team_key: 'nhl.t.24',
          editorial_team_full_name: 'Arizona Coyotes',
          editorial_team_abbr: 'Ari',
          uniform_number: '8',
          display_position: 'C,RW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/Z9VAH_AlqoVMw0ff8f.Y2A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01282021/6386.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/Z9VAH_AlqoVMw0ff8f.Y2A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01282021/6386.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C', 'RW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620412116,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '52' },
              { stat_id: '29', value: '52' },
              { stat_id: '1', value: '10' },
              { stat_id: '2', value: '22' },
              { stat_id: '3', value: '32' },
              { stat_id: '4', value: '-1' },
              { stat_id: '5', value: '16' },
              { stat_id: '6', value: '3' },
              { stat_id: '7', value: '4' },
              { stat_id: '8', value: '7' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '1' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '105' },
              { stat_id: '15', value: '.095' },
              { stat_id: '16', value: '230' },
              { stat_id: '17', value: '307' },
              { stat_id: '31', value: '15' },
              { stat_id: '32', value: '25' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 13 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '-',
            average_round: '-',
            average_cost: '-',
            percent_drafted: '-'
          }
        },
        {
          player_key: '403.p.6002',
          player_id: '6002',
          name: {
            full: 'Andre Burakovsky',
            first: 'Andre',
            last: 'Burakovsky',
            ascii_first: 'Andre',
            ascii_last: 'Burakovsky'
          },
          editorial_player_key: 'nhl.p.6002',
          editorial_team_key: 'nhl.t.17',
          editorial_team_full_name: 'Colorado Avalanche',
          editorial_team_abbr: 'Col',
          uniform_number: '95',
          display_position: 'LW,RW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/mIi6tq3JjGrjp5A29OsGEQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/6002.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/mIi6tq3JjGrjp5A29OsGEQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02052021/6002.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['LW', 'RW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620999680,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '53' },
              { stat_id: '29', value: '53' },
              { stat_id: '1', value: '19' },
              { stat_id: '2', value: '25' },
              { stat_id: '3', value: '44' },
              { stat_id: '4', value: '4' },
              { stat_id: '5', value: '10' },
              { stat_id: '6', value: '4' },
              { stat_id: '7', value: '10' },
              { stat_id: '8', value: '14' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '3' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '102' },
              { stat_id: '15', value: '.186' },
              { stat_id: '16', value: '2' },
              { stat_id: '17', value: '2' },
              { stat_id: '31', value: '22' },
              { stat_id: '32', value: '16' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 52 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '164.5',
            average_round: '14.5',
            average_cost: '1.3',
            percent_drafted: '0.44'
          }
        },
        {
          player_key: '403.p.5227',
          player_id: '5227',
          name: {
            full: 'Brayden McNabb',
            first: 'Brayden',
            last: 'McNabb',
            ascii_first: 'Brayden',
            ascii_last: 'McNabb'
          },
          editorial_player_key: 'nhl.p.5227',
          editorial_team_key: 'nhl.t.58',
          editorial_team_full_name: 'Vegas Golden Knights',
          editorial_team_abbr: 'VGK',
          uniform_number: '3',
          display_position: 'D',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/0DObnf4RGwklLpM19o.NCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02042021/5227.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/0DObnf4RGwklLpM19o.NCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02042021/5227.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['D'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '41' },
              { stat_id: '29', value: '41' },
              { stat_id: '1', value: '2' },
              { stat_id: '2', value: '6' },
              { stat_id: '3', value: '8' },
              { stat_id: '4', value: '10' },
              { stat_id: '5', value: '16' },
              { stat_id: '6', value: '0' },
              { stat_id: '7', value: '0' },
              { stat_id: '8', value: '0' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '0' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '39' },
              { stat_id: '15', value: '.051' },
              { stat_id: '16', value: '0' },
              { stat_id: '17', value: '0' },
              { stat_id: '31', value: '98' },
              { stat_id: '32', value: '76' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 7 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '-',
            average_round: '-',
            average_cost: '-',
            percent_drafted: '-'
          }
        },
        {
          player_key: '403.p.5659',
          player_id: '5659',
          name: {
            full: 'Brian Dumoulin',
            first: 'Brian',
            last: 'Dumoulin',
            ascii_first: 'Brian',
            ascii_last: 'Dumoulin'
          },
          editorial_player_key: 'nhl.p.5659',
          editorial_team_key: 'nhl.t.16',
          editorial_team_full_name: 'Pittsburgh Penguins',
          editorial_team_abbr: 'Pit',
          uniform_number: '8',
          display_position: 'D',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/n7DkfxWI.BvU8Vg0InFK4g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/5659.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/n7DkfxWI.BvU8Vg0InFK4g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11072019/5659.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['D'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '41' },
              { stat_id: '29', value: '41' },
              { stat_id: '1', value: '4' },
              { stat_id: '2', value: '10' },
              { stat_id: '3', value: '14' },
              { stat_id: '4', value: '18' },
              { stat_id: '5', value: '12' },
              { stat_id: '6', value: '0' },
              { stat_id: '7', value: '0' },
              { stat_id: '8', value: '0' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '1' },
              { stat_id: '11', value: '1' },
              { stat_id: '12', value: '0' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '50' },
              { stat_id: '15', value: '.080' },
              { stat_id: '16', value: '0' },
              { stat_id: '17', value: '0' },
              { stat_id: '31', value: '63' },
              { stat_id: '32', value: '55' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 7 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '-',
            average_round: '-',
            average_cost: '-',
            percent_drafted: '-'
          }
        },
        {
          player_key: '403.p.6476',
          player_id: '6476',
          name: {
            full: 'Devon Toews',
            first: 'Devon',
            last: 'Toews',
            ascii_first: 'Devon',
            ascii_last: 'Toews'
          },
          editorial_player_key: 'nhl.p.6476',
          editorial_team_key: 'nhl.t.17',
          editorial_team_full_name: 'Colorado Avalanche',
          editorial_team_abbr: 'Col',
          uniform_number: '7',
          display_position: 'D',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/1yN7f94Wo9VKobfSFx_6pw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01192021/6476.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/1yN7f94Wo9VKobfSFx_6pw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/01192021/6476.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['D'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620913318,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '53' },
              { stat_id: '29', value: '53' },
              { stat_id: '1', value: '9' },
              { stat_id: '2', value: '22' },
              { stat_id: '3', value: '31' },
              { stat_id: '4', value: '29' },
              { stat_id: '5', value: '16' },
              { stat_id: '6', value: '2' },
              { stat_id: '7', value: '4' },
              { stat_id: '8', value: '6' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '2' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '121' },
              { stat_id: '15', value: '.074' },
              { stat_id: '16', value: '0' },
              { stat_id: '17', value: '0' },
              { stat_id: '31', value: '44' },
              { stat_id: '32', value: '87' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 73 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '171.9',
            average_round: '15.0',
            average_cost: '1.0',
            percent_drafted: '0.22'
          }
        },
        {
          player_key: '403.p.5263',
          player_id: '5263',
          name: {
            full: 'Ben Chiarot',
            first: 'Ben',
            last: 'Chiarot',
            ascii_first: 'Ben',
            ascii_last: 'Chiarot'
          },
          editorial_player_key: 'nhl.p.5263',
          editorial_team_key: 'nhl.t.10',
          editorial_team_full_name: 'Montreal Canadiens',
          editorial_team_abbr: 'Mon',
          uniform_number: '8',
          display_position: 'D',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/EvhKchUATIC6ZwadJpjfIQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11122019/5263.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/EvhKchUATIC6ZwadJpjfIQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11122019/5263.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['D'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '41' },
              { stat_id: '29', value: '41' },
              { stat_id: '1', value: '1' },
              { stat_id: '2', value: '6' },
              { stat_id: '3', value: '7' },
              { stat_id: '4', value: '-16' },
              { stat_id: '5', value: '50' },
              { stat_id: '6', value: '1' },
              { stat_id: '7', value: '0' },
              { stat_id: '8', value: '1' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '0' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '81' },
              { stat_id: '15', value: '.012' },
              { stat_id: '16', value: '0' },
              { stat_id: '17', value: '0' },
              { stat_id: '31', value: '77' },
              { stat_id: '32', value: '60' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 9 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '172.0',
            average_round: '15.0',
            average_cost: '1.0',
            percent_drafted: '0.06'
          }
        },
        {
          player_key: '403.p.3898',
          player_id: '3898',
          name: {
            full: 'David Krejci',
            first: 'David',
            last: 'Krejci',
            ascii_first: 'David',
            ascii_last: 'Krejci'
          },
          editorial_player_key: 'nhl.p.3898',
          editorial_team_key: 'nhl.t.1',
          editorial_team_full_name: 'Boston Bruins',
          editorial_team_abbr: 'Bos',
          uniform_number: '46',
          display_position: 'C',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/h2ufJObb_KVF8wB4n4_gCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3898.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/h2ufJObb_KVF8wB4n4_gCw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02102021/3898.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '51' },
              { stat_id: '29', value: '51' },
              { stat_id: '1', value: '8' },
              { stat_id: '2', value: '36' },
              { stat_id: '3', value: '44' },
              { stat_id: '4', value: '16' },
              { stat_id: '5', value: '16' },
              { stat_id: '6', value: '3' },
              { stat_id: '7', value: '13' },
              { stat_id: '8', value: '16' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '1' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '83' },
              { stat_id: '15', value: '.096' },
              { stat_id: '16', value: '321' },
              { stat_id: '17', value: '271' },
              { stat_id: '31', value: '25' },
              { stat_id: '32', value: '26' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 51 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '164.1',
            average_round: '14.3',
            average_cost: '1.0',
            percent_drafted: '0.04'
          }
        },
        {
          player_key: '403.p.5029',
          player_id: '5029',
          name: {
            full: 'Johan Larsson',
            first: 'Johan',
            last: 'Larsson',
            ascii_first: 'Johan',
            ascii_last: 'Larsson'
          },
          status: 'O',
          status_full: 'Out',
          injury_note: 'Undisclosed',
          editorial_player_key: 'nhl.p.5029',
          editorial_team_key: 'nhl.t.24',
          editorial_team_full_name: 'Arizona Coyotes',
          editorial_team_abbr: 'Ari',
          uniform_number: '22',
          display_position: 'C,LW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/tvIV8tgyX_7wUcmxAuHutA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11252019/5029.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/tvIV8tgyX_7wUcmxAuHutA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11252019/5029.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C', 'LW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620454774,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '52' },
              { stat_id: '29', value: '52' },
              { stat_id: '1', value: '8' },
              { stat_id: '2', value: '6' },
              { stat_id: '3', value: '14' },
              { stat_id: '4', value: '-13' },
              { stat_id: '5', value: '24' },
              { stat_id: '6', value: '0' },
              { stat_id: '7', value: '0' },
              { stat_id: '8', value: '0' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '2' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '58' },
              { stat_id: '15', value: '.138' },
              { stat_id: '16', value: '296' },
              { stat_id: '17', value: '313' },
              { stat_id: '31', value: '77' },
              { stat_id: '32', value: '34' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 1 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '-',
            average_round: '-',
            average_cost: '-',
            percent_drafted: '-'
          }
        },
        {
          player_key: '403.p.3985',
          player_id: '3985',
          name: {
            full: 'Joe Pavelski',
            first: 'Joe',
            last: 'Pavelski',
            ascii_first: 'Joe',
            ascii_last: 'Pavelski'
          },
          editorial_player_key: 'nhl.p.3985',
          editorial_team_key: 'nhl.t.9',
          editorial_team_full_name: 'Dallas Stars',
          editorial_team_abbr: 'Dal',
          uniform_number: '16',
          display_position: 'C,RW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/HqVf8KUuyVlWOq5bI4MIvw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/3985.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/HqVf8KUuyVlWOq5bI4MIvw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/3985.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C', 'RW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620743312,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '56' },
              { stat_id: '29', value: '56' },
              { stat_id: '1', value: '25' },
              { stat_id: '2', value: '26' },
              { stat_id: '3', value: '51' },
              { stat_id: '4', value: '22' },
              { stat_id: '5', value: '16' },
              { stat_id: '6', value: '13' },
              { stat_id: '7', value: '8' },
              { stat_id: '8', value: '21' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '4' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '139' },
              { stat_id: '15', value: '.180' },
              { stat_id: '16', value: '362' },
              { stat_id: '17', value: '334' },
              { stat_id: '31', value: '64' },
              { stat_id: '32', value: '39' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 90 },
            { delta: '-1' }
          ],
          draft_analysis: {
            average_pick: '149.6',
            average_round: '12.9',
            average_cost: '1.0',
            percent_drafted: '0.18'
          }
        },
        {
          player_key: '403.p.5375',
          player_id: '5375',
          name: {
            full: 'Jamie Oleksiak',
            first: 'Jamie',
            last: 'Oleksiak',
            ascii_first: 'Jamie',
            ascii_last: 'Oleksiak'
          },
          editorial_player_key: 'nhl.p.5375',
          editorial_team_key: 'nhl.t.9',
          editorial_team_full_name: 'Dallas Stars',
          editorial_team_abbr: 'Dal',
          uniform_number: '2',
          display_position: 'D',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/hp9SHpIaaUGXxVqyuFqu9A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/5375.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/hp9SHpIaaUGXxVqyuFqu9A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02162021/5375.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['D'],
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '56' },
              { stat_id: '29', value: '56' },
              { stat_id: '1', value: '6' },
              { stat_id: '2', value: '8' },
              { stat_id: '3', value: '14' },
              { stat_id: '4', value: '-3' },
              { stat_id: '5', value: '35' },
              { stat_id: '6', value: '0' },
              { stat_id: '7', value: '0' },
              { stat_id: '8', value: '0' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '2' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '84' },
              { stat_id: '15', value: '.071' },
              { stat_id: '16', value: '0' },
              { stat_id: '17', value: '0' },
              { stat_id: '31', value: '148' },
              { stat_id: '32', value: '88' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 16 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '-',
            average_round: '-',
            average_cost: '-',
            percent_drafted: '-'
          }
        },
        {
          player_key: '403.p.7114',
          player_id: '7114',
          name: {
            full: 'Matthew Tkachuk',
            first: 'Matthew',
            last: 'Tkachuk',
            ascii_first: 'Matthew',
            ascii_last: 'Tkachuk'
          },
          editorial_player_key: 'nhl.p.7114',
          editorial_team_key: 'nhl.t.3',
          editorial_team_full_name: 'Calgary Flames',
          editorial_team_abbr: 'Cgy',
          uniform_number: '19',
          display_position: 'LW,RW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/dzS4ZL1up3PVpcGq9huemQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02172021/7114.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/dzS4ZL1up3PVpcGq9huemQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02172021/7114.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['LW', 'RW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620999190,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '53' },
              { stat_id: '29', value: '53' },
              { stat_id: '1', value: '12' },
              { stat_id: '2', value: '27' },
              { stat_id: '3', value: '39' },
              { stat_id: '4', value: '7' },
              { stat_id: '5', value: '51' },
              { stat_id: '6', value: '4' },
              { stat_id: '7', value: '11' },
              { stat_id: '8', value: '15' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '0' },
              { stat_id: '11', value: '0' },
              { stat_id: '12', value: '0' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '141' },
              { stat_id: '15', value: '.085' },
              { stat_id: '16', value: '3' },
              { stat_id: '17', value: '4' },
              { stat_id: '31', value: '130' },
              { stat_id: '32', value: '9' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 90 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '30.6',
            average_round: '3.1',
            average_cost: '25.4',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.6024',
          player_id: '6024',
          name: {
            full: 'Tristan Jarry',
            first: 'Tristan',
            last: 'Jarry',
            ascii_first: 'Tristan',
            ascii_last: 'Jarry'
          },
          editorial_player_key: 'nhl.p.6024',
          editorial_team_key: 'nhl.t.16',
          editorial_team_full_name: 'Pittsburgh Penguins',
          editorial_team_abbr: 'Pit',
          uniform_number: '35',
          display_position: 'G',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/kixY.Ta0koElGo4UzhYa1w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03092021/6024.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/kixY.Ta0koElGo4UzhYa1w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/03092021/6024.png',
          is_undroppable: '0',
          position_type: 'G',
          eligible_positions: ['G'],
          has_player_notes: 1,
          has_recent_player_notes: 1,
          player_notes_last_timestamp: 1621195462,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '39' },
              { stat_id: '30', value: '39' },
              { stat_id: '18', value: '38' },
              { stat_id: '19', value: '25' },
              { stat_id: '20', value: '9' },
              { stat_id: '21', value: '0' },
              { stat_id: '22', value: '100' },
              { stat_id: '23', value: '2.75' },
              { stat_id: '24', value: '1100' },
              { stat_id: '25', value: '1000' },
              { stat_id: '26', value: '.909' },
              { stat_id: '27', value: '2' },
              { stat_id: '28', value: '2,185:18' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 83 },
            { delta: '-3' }
          ],
          draft_analysis: {
            average_pick: '62.0',
            average_round: '5.8',
            average_cost: '8.3',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.5820',
          player_id: '5820',
          name: {
            full: 'Connor Hellebuyck',
            first: 'Connor',
            last: 'Hellebuyck',
            ascii_first: 'Connor',
            ascii_last: 'Hellebuyck'
          },
          editorial_player_key: 'nhl.p.5820',
          editorial_team_key: 'nhl.t.28',
          editorial_team_full_name: 'Winnipeg Jets',
          editorial_team_abbr: 'Wpg',
          uniform_number: '37',
          display_position: 'G',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/q601frYFGH743ZIcuPXB9Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11132019/5820.png',
          is_undroppable: '0',
          position_type: 'G',
          eligible_positions: ['G'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1621047777,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '45' },
              { stat_id: '30', value: '45' },
              { stat_id: '18', value: '45' },
              { stat_id: '19', value: '24' },
              { stat_id: '20', value: '17' },
              { stat_id: '21', value: '0' },
              { stat_id: '22', value: '112' },
              { stat_id: '23', value: '2.58' },
              { stat_id: '24', value: '1335' },
              { stat_id: '25', value: '1223' },
              { stat_id: '26', value: '.916' },
              { stat_id: '27', value: '4' },
              { stat_id: '28', value: '2,602:49' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 98 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '16.4',
            average_round: '1.9',
            average_cost: '39.5',
            percent_drafted: '1.00'
          }
        },
        {
          player_key: '403.p.6109',
          player_id: '6109',
          name: {
            full: 'Calvin Petersen',
            first: 'Calvin',
            last: 'Petersen',
            ascii_first: 'Calvin',
            ascii_last: 'Petersen'
          },
          editorial_player_key: 'nhl.p.6109',
          editorial_team_key: 'nhl.t.8',
          editorial_team_full_name: 'Los Angeles Kings',
          editorial_team_abbr: 'LA',
          uniform_number: '40',
          display_position: 'G',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/I7mxy6oi1dY8lJbZvLi_bQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/6109.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/I7mxy6oi1dY8lJbZvLi_bQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/11262019/6109.png',
          is_undroppable: '0',
          position_type: 'G',
          eligible_positions: ['G'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1620892722,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '35' },
              { stat_id: '30', value: '35' },
              { stat_id: '18', value: '32' },
              { stat_id: '19', value: '9' },
              { stat_id: '20', value: '18' },
              { stat_id: '21', value: '0' },
              { stat_id: '22', value: '97' },
              { stat_id: '23', value: '2.89' },
              { stat_id: '24', value: '1095' },
              { stat_id: '25', value: '998' },
              { stat_id: '26', value: '.911' },
              { stat_id: '27', value: '0' },
              { stat_id: '28', value: '2,015:51' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 23 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '167.7',
            average_round: '14.6',
            average_cost: '1.0',
            percent_drafted: '0.02'
          }
        },
        {
          player_key: '403.p.4471',
          player_id: '4471',
          name: {
            full: 'Steven Stamkos',
            first: 'Steven',
            last: 'Stamkos',
            ascii_first: 'Steven',
            ascii_last: 'Stamkos'
          },
          editorial_player_key: 'nhl.p.4471',
          editorial_team_key: 'nhl.t.20',
          editorial_team_full_name: 'Tampa Bay Lightning',
          editorial_team_abbr: 'TB',
          uniform_number: '91',
          display_position: 'C,LW,RW',
          headshot: {
            url:
              'https://s.yimg.com/iu/api/res/1.2/o15GdP7l084eucefl6MoWA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02032021/4471.png',
            size: 'small'
          },
          image_url:
            'https://s.yimg.com/iu/api/res/1.2/o15GdP7l084eucefl6MoWA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/nhl_cutout/players_l/02032021/4471.png',
          is_undroppable: '0',
          position_type: 'P',
          eligible_positions: ['C', 'LW', 'RW'],
          has_player_notes: 1,
          player_notes_last_timestamp: 1621096826,
          stats: {
            coverage_type: 'season',
            coverage_value: '2020',
            stats: [
              { stat_id: '0', value: '38' },
              { stat_id: '29', value: '38' },
              { stat_id: '1', value: '17' },
              { stat_id: '2', value: '17' },
              { stat_id: '3', value: '34' },
              { stat_id: '4', value: '4' },
              { stat_id: '5', value: '16' },
              { stat_id: '6', value: '10' },
              { stat_id: '7', value: '5' },
              { stat_id: '8', value: '15' },
              { stat_id: '9', value: '0' },
              { stat_id: '10', value: '1' },
              { stat_id: '11', value: '1' },
              { stat_id: '12', value: '1' },
              { stat_id: '13', value: '-' },
              { stat_id: '14', value: '91' },
              { stat_id: '15', value: '.187' },
              { stat_id: '16', value: '238' },
              { stat_id: '17', value: '178' },
              { stat_id: '31', value: '38' },
              { stat_id: '32', value: '10' }
            ]
          },
          percent_owned: [
            { coverage_type: 'week', week: '17' },
            { value: 88 },
            { delta: '0' }
          ],
          draft_analysis: {
            average_pick: '22.4',
            average_round: '2.4',
            average_cost: '31.0',
            percent_drafted: '1.00'
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
      })
        .then((response) => {
          // console.log(JSON.stringify(response.data))
          self.team = response.data[0]
          let playerKeys = response.data[0].roster.map((player) => {
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
        .then((response) => {
          // console.log(JSON.stringify(response.data))
          self.players = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    roster: function () {
      let positions = Array.from(
        new Set(
          this.$store.state.categories.map((category) => {
            return category.position_type
          })
        )
      )
      let positionsObj = positions.map((position) => {
        return { position_type: position, players: [], stats: [] }
      })
      this.players.forEach((player) => {
        positionsObj.forEach((position) => {
          if (position.position_type === player.position_type) {
            position.players.push(player)
          }
        })
      })
      this.$store.state.categories.forEach((category) => {
        positionsObj.forEach((position) => {
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
