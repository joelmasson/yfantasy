<template>
    <Standings :standings='league'></Standings>
</template>
<script>
import Axios from 'axios'
import Standings from './Standings'
export default {
  name: 'League',
  data () {
    return {
      league: {
        league_key: '396.l.13492',
        league_id: '13492',
        name: 'DFHL',
        url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492',
        logo_url: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29523399624_2c718a1226.jpg',
        draft_status: 'postdraft',
        num_teams: 14,
        edit_key: '2020-03-08',
        weekly_deadline: 'intraday',
        league_update_timestamp: '1591250587',
        scoring_type: 'head',
        league_type: 'private',
        renew: '386_9696',
        renewed: '403_3898',
        iris_group_chat_id: '',
        allow_add_to_dl_extra_pos: 1,
        is_pro_league: '0',
        is_cash_league: '0',
        current_week: '21',
        start_week: '1',
        start_date: '2019-10-02',
        end_week: '21',
        end_date: '2020-03-08',
        is_finished: 1,
        game_code: 'nhl',
        season: '2019',
        settings: {
          draft_type: 'live',
          is_auction_draft: '0',
          scoring_type: 'head',
          uses_playoff: '0',
          uses_roster_import: '1',
          roster_import_deadline: '2019-09-29',
          waiver_type: 'R',
          waiver_rule: 'all',
          uses_faab: '0',
          draft_time: '1569978000',
          draft_pick_time: '90',
          post_draft_players: 'W',
          max_teams: '14',
          waiver_time: '1',
          trade_end_date: '2020-02-19',
          trade_ratify_type: 'none',
          trade_reject_time: '0',
          player_pool: 'ALL',
          cant_cut_list: 'none',
          is_publicly_viewable: '1',
          can_trade_draft_picks: '1',
          sendbird_channel_url: '167d86997324d6f209b3cf21c963efca',
          roster_positions: [
            {
              position: 'C',
              position_type: 'P',
              count: 2
            },
            {
              position: 'LW',
              position_type: 'P',
              count: 2
            },
            {
              position: 'RW',
              position_type: 'P',
              count: 2
            },
            {
              position: 'D',
              position_type: 'P',
              count: 4
            },
            {
              position: 'Util',
              position_type: 'P',
              count: 1
            },
            {
              position: 'G',
              position_type: 'G',
              count: 2
            },
            {
              position: 'BN',
              count: 5
            },
            {
              position: 'IR+',
              count: '1'
            }
          ],
          stat_categories: [
            {
              stat_id: 1,
              enabled: '1',
              name: 'Goals',
              display_name: 'G',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 2,
              enabled: '1',
              name: 'Assists',
              display_name: 'A',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 4,
              enabled: '1',
              name: 'Plus/Minus',
              display_name: '+/-',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 5,
              enabled: '1',
              name: 'Penalty Minutes',
              display_name: 'PIM',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 8,
              enabled: '1',
              name: 'Powerplay Points',
              display_name: 'PPP',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 12,
              enabled: '1',
              name: 'Game-Winning Goals',
              display_name: 'GWG',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 16,
              enabled: '1',
              name: 'Faceoffs Won',
              display_name: 'FW',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 31,
              enabled: '1',
              name: 'Hits',
              display_name: 'HIT',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 32,
              enabled: '1',
              name: 'Blocks',
              display_name: 'BLK',
              sort_order: '1',
              position_type: 'P',
              stat_position_types: [
                {
                  position_type: 'P'
                }
              ]
            },
            {
              stat_id: 19,
              enabled: '1',
              name: 'Wins',
              display_name: 'W',
              sort_order: '1',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G'
                }
              ]
            },
            {
              stat_id: 22,
              enabled: '1',
              name: 'Goals Against',
              display_name: 'GA',
              sort_order: '0',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G',
                  is_only_display_stat: '1'
                }
              ],
              is_only_display_stat: '1'
            },
            {
              stat_id: 23,
              enabled: '1',
              name: 'Goals Against Average',
              display_name: 'GAA',
              sort_order: '0',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G'
                }
              ]
            },
            {
              stat_id: 25,
              enabled: '1',
              name: 'Saves',
              display_name: 'SV',
              sort_order: '1',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G',
                  is_only_display_stat: '1'
                }
              ],
              is_only_display_stat: '1'
            },
            {
              stat_id: 24,
              enabled: '1',
              name: 'Shots Against',
              display_name: 'SA',
              sort_order: '1',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G',
                  is_only_display_stat: '1'
                }
              ],
              is_only_display_stat: '1'
            },
            {
              stat_id: 26,
              enabled: '1',
              name: 'Save Percentage',
              display_name: 'SV%',
              sort_order: '1',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G'
                }
              ]
            },
            {
              stat_id: 27,
              enabled: '1',
              name: 'Shutouts',
              display_name: 'SHO',
              sort_order: '1',
              position_type: 'G',
              stat_position_types: [
                {
                  position_type: 'G'
                }
              ]
            }
          ],
          max_weekly_adds: '5'
        },
        standings: [
          {
            team_key: '396.l.13492.t.14',
            team_id: '14',
            name: 'Pastrnak For Scoring',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/14',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/f44936e01abb52e381c5de6e298419640bdc128b1220923154eb65ffab896f7f.jpg'
              }
            ],
            waiver_priority: 2,
            number_of_moves: '90',
            number_of_trades: 0,
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '4'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '14',
                nickname: 'DC',
                guid: 'SXM4LHDILXF4XGUNV7PKVVH7YY',
                email: 'drew_crosby17@yahoo.ca',
                image_url:
                  'https://s.yimg.com/ag/images/4647/27429759489_56f836_64sq.jpg'
              }
            ],
            standings: {
              rank: '1',
              outcome_totals: {
                wins: '148',
                losses: '96',
                ties: '29',
                percentage: '.595'
              }
            }
          },
          {
            team_key: '396.l.13492.t.9',
            team_id: '9',
            name: 'North Kariya',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/9',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56515160113_e1121f.jpg'
              }
            ],
            waiver_priority: 6,
            number_of_moves: '85',
            number_of_trades: '1',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '5'
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
                  'https://s.yimg.com/ag/images/4566/38735110836_6c76aa_64sq.jpg'
              }
            ],
            standings: {
              rank: '2',
              outcome_totals: {
                wins: '143',
                losses: '100',
                ties: '30',
                percentage: '.579'
              }
            }
          },
          {
            team_key: '396.l.13492.t.1',
            team_id: '1',
            name: 'Junior Mints',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/1',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24708063344_6a67da08aa.jpg'
              }
            ],
            waiver_priority: 11,
            number_of_moves: '92',
            number_of_trades: '8',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '4'
            },
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
                  'https://s.yimg.com/ag/images/1876/43465071884_433417_64sq.jpg'
              }
            ],
            standings: {
              rank: '3',
              outcome_totals: {
                wins: '132',
                losses: '100',
                ties: '41',
                percentage: '.559'
              }
            }
          },
          {
            team_key: '396.l.13492.t.11',
            team_id: '11',
            name: 'Super Duper',
            is_owned_by_current_login: 1,
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
              }
            ],
            waiver_priority: 8,
            number_of_moves: '92',
            number_of_trades: '2',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '4'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '11',
                nickname: 'Joel',
                guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                is_current_login: '1',
                email: 'jm_canada_eh@hotmail.com',
                image_url:
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '4',
              outcome_totals: {
                wins: '137',
                losses: '107',
                ties: '29',
                percentage: '.555'
              }
            }
          },
          {
            team_key: '396.l.13492.t.7',
            team_id: '7',
            name: 'leafs nation',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/7',
            team_logos: [
              {
                size: 'large',
                url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_10.png'
              }
            ],
            waiver_priority: 9,
            number_of_moves: '94',
            number_of_trades: '1',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '3'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '7',
                nickname: 'Allen',
                guid: 'E67HKVCPRMXPXZ52ER3WH4M6NM',
                email: 'allen24342003@yahoo.com',
                image_url:
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '5',
              outcome_totals: {
                wins: '136',
                losses: '107',
                ties: '30',
                percentage: '.553'
              }
            }
          },
          {
            team_key: '396.l.13492.t.10',
            team_id: '10',
            name: 'North York Nylanders',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/10',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/30455746845_db501c0bac.jpg'
              }
            ],
            waiver_priority: 1,
            number_of_moves: '2',
            number_of_trades: 0,
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
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
                  'https://s.yimg.com/ag/images/4546/37417984563_5dc741_64sq.jpg'
              }
            ],
            standings: {
              rank: '6',
              outcome_totals: {
                wins: '125',
                losses: '111',
                ties: '37',
                percentage: '.526'
              }
            }
          },
          {
            team_key: '396.l.13492.t.2',
            team_id: '2',
            name: 'Aborted Abortions',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/2',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55179360532_22e79a.jpg'
              }
            ],
            waiver_priority: 14,
            number_of_moves: '53',
            number_of_trades: '6',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '2'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '2',
                nickname: '-- hidden --',
                guid: 'EDD7EUCBYK6WZQAKL7MIEPWLSM',
                image_url:
                  'https://s.yimg.com/ag/images/4527/37420082523_4c924c_64sq.jpg'
              }
            ],
            standings: {
              rank: '7',
              outcome_totals: {
                wins: '127',
                losses: '119',
                ties: '27',
                percentage: '.515'
              }
            }
          },
          {
            team_key: '396.l.13492.t.6',
            team_id: '6',
            name: 'Laser Falcons',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/6',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24957944639_a8c0e68e13.jpg'
              }
            ],
            waiver_priority: 5,
            number_of_moves: '48',
            number_of_trades: '1',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '3'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '6',
                nickname: 'T. Roscoe',
                guid: 'CNCYZPYD3YL4YGNQG6UH4N4WAI',
                email: 'tkiely42@yahoo.com',
                image_url:
                  'https://s.yimg.com/ag/images/4730/24365090257_d58d3c_64sq.jpg'
              }
            ],
            standings: {
              rank: '8',
              outcome_totals: {
                wins: '122',
                losses: '126',
                ties: '25',
                percentage: '.493'
              }
            }
          },
          {
            team_key: '396.l.13492.t.3',
            team_id: '3',
            name: 'The Mighty Towels',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/3',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56476601481_d01d0b.jpg'
              }
            ],
            waiver_priority: 12,
            number_of_moves: '61',
            number_of_trades: '3',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '4'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '3',
                nickname: 'Richard P',
                guid: 'PRWHXQ2M23K5GQIWX4JT6BDEQE',
                email: 'benchie420@yahoo.ca',
                image_url:
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '9',
              outcome_totals: {
                wins: '120',
                losses: '125',
                ties: '28',
                percentage: '.491'
              }
            }
          },
          {
            team_key: '396.l.13492.t.5',
            team_id: '5',
            name: 'Don’t Toews Me Bro!',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/5',
            team_logos: [
              {
                size: 'large',
                url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_2.png'
              }
            ],
            waiver_priority: 4,
            number_of_moves: '46',
            number_of_trades: '1',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '5'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '5',
                nickname: 'Harvey Milne',
                guid: '6HG3VNJ5OWLOIV7CJHKBKUBUTM',
                email: 'x_pac6@hotmail.com',
                image_url:
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '10',
              outcome_totals: {
                wins: '116',
                losses: '124',
                ties: '33',
                percentage: '.485'
              }
            }
          },
          {
            team_key: '396.l.13492.t.4',
            team_id: '4',
            name: 'Dickheads',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/4',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/38445937905_996daa.jpg'
              }
            ],
            waiver_priority: 13,
            number_of_moves: '23',
            number_of_trades: '3',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '1'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '4',
                nickname: 'derick',
                guid: 'HWK2IENJ65PE3B356A4OTL7T6Q',
                email: 'dr.d613@yahoo.com',
                image_url:
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '11',
              outcome_totals: {
                wins: '113',
                losses: '127',
                ties: '33',
                percentage: '.474'
              }
            }
          },
          {
            team_key: '396.l.13492.t.13',
            team_id: '13',
            name: 'Titty Twisters',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/13',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55193119802_a339ed.jpg'
              }
            ],
            waiver_priority: 10,
            number_of_moves: '86',
            number_of_trades: '10',
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '1'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '13',
                nickname: 'Adam',
                guid: '4RZB22PP5ZMMAKHXLIF5SW23OY',
                email: 'adam@madacomm.ca',
                image_url:
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '12',
              outcome_totals: {
                wins: '114',
                losses: '136',
                ties: '23',
                percentage: '.460'
              }
            }
          },
          {
            team_key: '396.l.13492.t.12',
            team_id: '12',
            name: 'Gritty’s Grinders',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/12',
            team_logos: [
              {
                size: 'large',
                url:
                  'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/44959982251_2ab3ba.jpg'
              }
            ],
            waiver_priority: 3,
            number_of_moves: '20',
            number_of_trades: 0,
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
              value: '2'
            },
            league_scoring_type: 'head',
            has_draft_grade: 0,
            managers: [
              {
                manager_id: '12',
                nickname: 'Cory Quaresma',
                guid: 'NVDADIZ6KCJ6WOEI2RMQTZY3IA',
                email: 'cory.quaresma@gmail.com',
                image_url:
                  'https://s.yimg.com/ag/images/4557/37414443143_c66985_64sq.jpg'
              }
            ],
            standings: {
              rank: '13',
              outcome_totals: {
                wins: '98',
                losses: '144',
                ties: '31',
                percentage: '.416'
              }
            }
          },
          {
            team_key: '396.l.13492.t.8',
            team_id: '8',
            name: 'No Longer Jasworx',
            url: 'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/8',
            team_logos: [
              {
                size: 'large',
                url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_5.png'
              }
            ],
            waiver_priority: 7,
            number_of_moves: '1',
            number_of_trades: 0,
            roster_adds: {
              coverage_type: 'week',
              coverage_value: '21',
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
                  'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
              }
            ],
            standings: {
              rank: '14',
              outcome_totals: {
                wins: '64',
                losses: '173',
                ties: '36',
                percentage: '.300'
              }
            }
          }
        ],
        scoreboard: {
          matchups: [
            {
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '396.l.13492.t.1',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.1'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.9'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.9'
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
                  team_key: '396.l.13492.t.1',
                  team_id: '1',
                  name: 'Junior Mints',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/1',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24708063344_6a67da08aa.jpg'
                    }
                  ],
                  waiver_priority: 11,
                  number_of_moves: '92',
                  number_of_trades: '8',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '4'
                  },
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
                        'https://s.yimg.com/ag/images/1876/43465071884_433417_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '10'
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
                      value: '-3'
                    },
                    {
                      stat_id: '5',
                      value: '22'
                    },
                    {
                      stat_id: '8',
                      value: '10'
                    },
                    {
                      stat_id: '12',
                      value: '4'
                    },
                    {
                      stat_id: '16',
                      value: '159'
                    },
                    {
                      stat_id: '31',
                      value: '63'
                    },
                    {
                      stat_id: '32',
                      value: '41'
                    },
                    {
                      stat_id: '19',
                      value: '3'
                    },
                    {
                      stat_id: '22',
                      value: '22'
                    },
                    {
                      stat_id: '23',
                      value: '3.66'
                    },
                    {
                      stat_id: '25',
                      value: '141'
                    },
                    {
                      stat_id: '24',
                      value: '163'
                    },
                    {
                      stat_id: '26',
                      value: '.865'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.9',
                  team_id: '9',
                  name: 'North Kariya',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/9',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56515160113_e1121f.jpg'
                    }
                  ],
                  waiver_priority: 6,
                  number_of_moves: '85',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '5'
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
                        'https://s.yimg.com/ag/images/4566/38735110836_6c76aa_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '5'
                    },
                    {
                      stat_id: '2',
                      value: '17'
                    },
                    {
                      stat_id: '4',
                      value: '-4'
                    },
                    {
                      stat_id: '5',
                      value: '16'
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
                      value: '88'
                    },
                    {
                      stat_id: '31',
                      value: '53'
                    },
                    {
                      stat_id: '32',
                      value: '36'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '5'
                    },
                    {
                      stat_id: '23',
                      value: '1.61'
                    },
                    {
                      stat_id: '25',
                      value: '71'
                    },
                    {
                      stat_id: '24',
                      value: '76'
                    },
                    {
                      stat_id: '26',
                      value: '.934'
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
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '396.l.13492.t.2',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '396.l.13492.t.8'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.8'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.2'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '396.l.13492.t.2'
                  }
                }
              ],
              teams: [
                {
                  team_key: '396.l.13492.t.2',
                  team_id: '2',
                  name: 'Aborted Abortions',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/2',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55179360532_22e79a.jpg'
                    }
                  ],
                  waiver_priority: 14,
                  number_of_moves: '53',
                  number_of_trades: '6',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '2'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '2',
                      nickname: '-- hidden --',
                      guid: 'EDD7EUCBYK6WZQAKL7MIEPWLSM',
                      image_url:
                        'https://s.yimg.com/ag/images/4527/37420082523_4c924c_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '11'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '8'
                    },
                    {
                      stat_id: '2',
                      value: '21'
                    },
                    {
                      stat_id: '4',
                      value: '-2'
                    },
                    {
                      stat_id: '5',
                      value: '34'
                    },
                    {
                      stat_id: '8',
                      value: '8'
                    },
                    {
                      stat_id: '12',
                      value: '0'
                    },
                    {
                      stat_id: '16',
                      value: '136'
                    },
                    {
                      stat_id: '31',
                      value: '59'
                    },
                    {
                      stat_id: '32',
                      value: '36'
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
                      value: '1.82'
                    },
                    {
                      stat_id: '25',
                      value: '143'
                    },
                    {
                      stat_id: '24',
                      value: '151'
                    },
                    {
                      stat_id: '26',
                      value: '.947'
                    },
                    {
                      stat_id: '27',
                      value: '2'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.8',
                  team_id: '8',
                  name: 'No Longer Jasworx',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/8',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_5.png'
                    }
                  ],
                  waiver_priority: 7,
                  number_of_moves: '1',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
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
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '7'
                    },
                    {
                      stat_id: '2',
                      value: '12'
                    },
                    {
                      stat_id: '4',
                      value: '-3'
                    },
                    {
                      stat_id: '5',
                      value: '10'
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
                      value: '20'
                    },
                    {
                      stat_id: '31',
                      value: '39'
                    },
                    {
                      stat_id: '32',
                      value: '12'
                    },
                    {
                      stat_id: '19',
                      value: '4'
                    },
                    {
                      stat_id: '22',
                      value: '14'
                    },
                    {
                      stat_id: '23',
                      value: '2.04'
                    },
                    {
                      stat_id: '25',
                      value: '205'
                    },
                    {
                      stat_id: '24',
                      value: '219'
                    },
                    {
                      stat_id: '26',
                      value: '.936'
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
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '396.l.13492.t.7',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '396.l.13492.t.3'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.7'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '396.l.13492.t.3'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.3'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.3'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.3'
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
                  team_key: '396.l.13492.t.3',
                  team_id: '3',
                  name: 'The Mighty Towels',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/3',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/56476601481_d01d0b.jpg'
                    }
                  ],
                  waiver_priority: 12,
                  number_of_moves: '61',
                  number_of_trades: '3',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '4'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '3',
                      nickname: 'Richard P',
                      guid: 'PRWHXQ2M23K5GQIWX4JT6BDEQE',
                      email: 'benchie420@yahoo.ca',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '5'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '5'
                    },
                    {
                      stat_id: '2',
                      value: '16'
                    },
                    {
                      stat_id: '4',
                      value: '-7'
                    },
                    {
                      stat_id: '5',
                      value: '10'
                    },
                    {
                      stat_id: '8',
                      value: '7'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '105'
                    },
                    {
                      stat_id: '31',
                      value: '43'
                    },
                    {
                      stat_id: '32',
                      value: '52'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '5'
                    },
                    {
                      stat_id: '23',
                      value: '1.67'
                    },
                    {
                      stat_id: '25',
                      value: '94'
                    },
                    {
                      stat_id: '24',
                      value: '99'
                    },
                    {
                      stat_id: '26',
                      value: '.949'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.7',
                  team_id: '7',
                  name: 'leafs nation',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/7',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_10.png'
                    }
                  ],
                  waiver_priority: 9,
                  number_of_moves: '94',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '3'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '7',
                      nickname: 'Allen',
                      guid: 'E67HKVCPRMXPXZ52ER3WH4M6NM',
                      email: 'allen24342003@yahoo.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '7'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '17'
                    },
                    {
                      stat_id: '2',
                      value: '18'
                    },
                    {
                      stat_id: '4',
                      value: '7'
                    },
                    {
                      stat_id: '5',
                      value: '21'
                    },
                    {
                      stat_id: '8',
                      value: '9'
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
                      value: '79'
                    },
                    {
                      stat_id: '32',
                      value: '36'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '10'
                    },
                    {
                      stat_id: '23',
                      value: '3.35'
                    },
                    {
                      stat_id: '25',
                      value: '83'
                    },
                    {
                      stat_id: '24',
                      value: '93'
                    },
                    {
                      stat_id: '26',
                      value: '.892'
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
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '396.l.13492.t.6',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '396.l.13492.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '396.l.13492.t.4'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.6'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '396.l.13492.t.6'
                  }
                }
              ],
              teams: [
                {
                  team_key: '396.l.13492.t.4',
                  team_id: '4',
                  name: 'Dickheads',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/4',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/38445937905_996daa.jpg'
                    }
                  ],
                  waiver_priority: 13,
                  number_of_moves: '23',
                  number_of_trades: '3',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '1'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '4',
                      nickname: 'derick',
                      guid: 'HWK2IENJ65PE3B356A4OTL7T6Q',
                      email: 'dr.d613@yahoo.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '3'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '7'
                    },
                    {
                      stat_id: '2',
                      value: '11'
                    },
                    {
                      stat_id: '4',
                      value: '7'
                    },
                    {
                      stat_id: '5',
                      value: '27'
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
                      value: '106'
                    },
                    {
                      stat_id: '31',
                      value: '49'
                    },
                    {
                      stat_id: '32',
                      value: '23'
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
                      value: '4.96'
                    },
                    {
                      stat_id: '25',
                      value: '92'
                    },
                    {
                      stat_id: '24',
                      value: '111'
                    },
                    {
                      stat_id: '26',
                      value: '.829'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.6',
                  team_id: '6',
                  name: 'Laser Falcons',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/6',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/24957944639_a8c0e68e13.jpg'
                    }
                  ],
                  waiver_priority: 5,
                  number_of_moves: '48',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '3'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '6',
                      nickname: 'T. Roscoe',
                      guid: 'CNCYZPYD3YL4YGNQG6UH4N4WAI',
                      email: 'tkiely42@yahoo.com',
                      image_url:
                        'https://s.yimg.com/ag/images/4730/24365090257_d58d3c_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '10'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '17'
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
                      value: '21'
                    },
                    {
                      stat_id: '8',
                      value: '7'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '102'
                    },
                    {
                      stat_id: '31',
                      value: '54'
                    },
                    {
                      stat_id: '32',
                      value: '31'
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
                      value: '2.22'
                    },
                    {
                      stat_id: '25',
                      value: '118'
                    },
                    {
                      stat_id: '24',
                      value: '127'
                    },
                    {
                      stat_id: '26',
                      value: '.929'
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
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '396.l.13492.t.14',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '396.l.13492.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '396.l.13492.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '396.l.13492.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '12',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '396.l.13492.t.5'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.14'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '396.l.13492.t.14'
                  }
                }
              ],
              teams: [
                {
                  team_key: '396.l.13492.t.5',
                  team_id: '5',
                  name: 'Don’t Toews Me Bro!',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/5',
                  team_logos: [
                    {
                      size: 'large',
                      url: 'https://s.yimg.com/cv/apiv2/default/nhl/nhl_2.png'
                    }
                  ],
                  waiver_priority: 4,
                  number_of_moves: '46',
                  number_of_trades: '1',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '5'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '5',
                      nickname: 'Harvey Milne',
                      guid: '6HG3VNJ5OWLOIV7CJHKBKUBUTM',
                      email: 'x_pac6@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '4'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '18'
                    },
                    {
                      stat_id: '2',
                      value: '25'
                    },
                    {
                      stat_id: '4',
                      value: '13'
                    },
                    {
                      stat_id: '5',
                      value: '21'
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
                      value: '139'
                    },
                    {
                      stat_id: '31',
                      value: '62'
                    },
                    {
                      stat_id: '32',
                      value: '45'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '14'
                    },
                    {
                      stat_id: '23',
                      value: '4.44'
                    },
                    {
                      stat_id: '25',
                      value: '83'
                    },
                    {
                      stat_id: '24',
                      value: '97'
                    },
                    {
                      stat_id: '26',
                      value: '.856'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.14',
                  team_id: '14',
                  name: 'Pastrnak For Scoring',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/14',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/f44936e01abb52e381c5de6e298419640bdc128b1220923154eb65ffab896f7f.jpg'
                    }
                  ],
                  waiver_priority: 2,
                  number_of_moves: '90',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '4'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '14',
                      nickname: 'DC',
                      guid: 'SXM4LHDILXF4XGUNV7PKVVH7YY',
                      email: 'drew_crosby17@yahoo.ca',
                      image_url:
                        'https://s.yimg.com/ag/images/4647/27429759489_56f836_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '8'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '20'
                    },
                    {
                      stat_id: '2',
                      value: '11'
                    },
                    {
                      stat_id: '4',
                      value: '-12'
                    },
                    {
                      stat_id: '5',
                      value: '24'
                    },
                    {
                      stat_id: '8',
                      value: '10'
                    },
                    {
                      stat_id: '12',
                      value: '4'
                    },
                    {
                      stat_id: '16',
                      value: '100'
                    },
                    {
                      stat_id: '31',
                      value: '66'
                    },
                    {
                      stat_id: '32',
                      value: '45'
                    },
                    {
                      stat_id: '19',
                      value: '2'
                    },
                    {
                      stat_id: '22',
                      value: '5'
                    },
                    {
                      stat_id: '23',
                      value: '1.23'
                    },
                    {
                      stat_id: '25',
                      value: '96'
                    },
                    {
                      stat_id: '24',
                      value: '101'
                    },
                    {
                      stat_id: '26',
                      value: '.950'
                    },
                    {
                      stat_id: '27',
                      value: '2'
                    }
                  ]
                }
              ]
            },
            {
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 1,
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.13'
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
                    winner_team_key: '396.l.13492.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '8',
                    winner_team_key: '396.l.13492.t.13'
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
                    winner_team_key: '396.l.13492.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.13'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '396.l.13492.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.10'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.10'
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
                  team_key: '396.l.13492.t.10',
                  team_id: '10',
                  name: 'North York Nylanders',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/10',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/30455746845_db501c0bac.jpg'
                    }
                  ],
                  waiver_priority: 1,
                  number_of_moves: '2',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
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
                        'https://s.yimg.com/ag/images/4546/37417984563_5dc741_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '5'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '3'
                    },
                    {
                      stat_id: '2',
                      value: '15'
                    },
                    {
                      stat_id: '4',
                      value: '-10'
                    },
                    {
                      stat_id: '5',
                      value: '22'
                    },
                    {
                      stat_id: '8',
                      value: '4'
                    },
                    {
                      stat_id: '12',
                      value: '1'
                    },
                    {
                      stat_id: '16',
                      value: '87'
                    },
                    {
                      stat_id: '31',
                      value: '45'
                    },
                    {
                      stat_id: '32',
                      value: '35'
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
                      value: '2.05'
                    },
                    {
                      stat_id: '25',
                      value: '71'
                    },
                    {
                      stat_id: '24',
                      value: '77'
                    },
                    {
                      stat_id: '26',
                      value: '.922'
                    },
                    {
                      stat_id: '27',
                      value: '0'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.13',
                  team_id: '13',
                  name: 'Titty Twisters',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/13',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/55193119802_a339ed.jpg'
                    }
                  ],
                  waiver_priority: 10,
                  number_of_moves: '86',
                  number_of_trades: '10',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '1'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '13',
                      nickname: 'Adam',
                      guid: '4RZB22PP5ZMMAKHXLIF5SW23OY',
                      email: 'adam@madacomm.ca',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '5'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '5'
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
                      value: '29'
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
                      value: '86'
                    },
                    {
                      stat_id: '31',
                      value: '50'
                    },
                    {
                      stat_id: '32',
                      value: '27'
                    },
                    {
                      stat_id: '19',
                      value: '0'
                    },
                    {
                      stat_id: '22',
                      value: '12'
                    },
                    {
                      stat_id: '23',
                      value: '3.39'
                    },
                    {
                      stat_id: '25',
                      value: '96'
                    },
                    {
                      stat_id: '24',
                      value: '108'
                    },
                    {
                      stat_id: '26',
                      value: '.889'
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
              week: '21',
              week_start: '2020-03-02',
              week_end: '2020-03-08',
              status: 'postevent',
              is_playoffs: '0',
              is_consolation: '0',
              is_tied: 0,
              winner_team_key: '396.l.13492.t.11',
              stat_winners: [
                {
                  stat_winner: {
                    stat_id: '1',
                    winner_team_key: '396.l.13492.t.12'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '2',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '4',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '5',
                    winner_team_key: '396.l.13492.t.12'
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
                    is_tied: 1
                  }
                },
                {
                  stat_winner: {
                    stat_id: '16',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '31',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '32',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '19',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '23',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '26',
                    winner_team_key: '396.l.13492.t.11'
                  }
                },
                {
                  stat_winner: {
                    stat_id: '27',
                    winner_team_key: '396.l.13492.t.11'
                  }
                }
              ],
              teams: [
                {
                  team_key: '396.l.13492.t.11',
                  team_id: '11',
                  name: 'Super Duper',
                  is_owned_by_current_login: 1,
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/11',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/29847226250_9574dd2b7e.jpg'
                    }
                  ],
                  waiver_priority: 8,
                  number_of_moves: '92',
                  number_of_trades: '2',
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '4'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '11',
                      nickname: 'Joel',
                      guid: 'H3GPYPA7CGSM3GD5FEC5IAVFJQ',
                      is_current_login: '1',
                      email: 'jm_canada_eh@hotmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
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
                      value: '7'
                    },
                    {
                      stat_id: '5',
                      value: '30'
                    },
                    {
                      stat_id: '8',
                      value: '6'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '180'
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
                      value: '8'
                    },
                    {
                      stat_id: '23',
                      value: '2.26'
                    },
                    {
                      stat_id: '25',
                      value: '98'
                    },
                    {
                      stat_id: '24',
                      value: '106'
                    },
                    {
                      stat_id: '26',
                      value: '.925'
                    },
                    {
                      stat_id: '27',
                      value: '1'
                    }
                  ]
                },
                {
                  team_key: '396.l.13492.t.12',
                  team_id: '12',
                  name: 'Gritty’s Grinders',
                  url:
                    'https://hockey.fantasysports.yahoo.com/2019/hockey/13492/12',
                  team_logos: [
                    {
                      size: 'large',
                      url:
                        'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/44959982251_2ab3ba.jpg'
                    }
                  ],
                  waiver_priority: 3,
                  number_of_moves: '20',
                  number_of_trades: 0,
                  roster_adds: {
                    coverage_type: 'week',
                    coverage_value: '21',
                    value: '2'
                  },
                  league_scoring_type: 'head',
                  has_draft_grade: 0,
                  managers: [
                    {
                      manager_id: '12',
                      nickname: 'Cory Quaresma',
                      guid: 'NVDADIZ6KCJ6WOEI2RMQTZY3IA',
                      email: 'cory.quaresma@gmail.com',
                      image_url:
                        'https://s.yimg.com/ag/images/4557/37414443143_c66985_64sq.jpg'
                    }
                  ],
                  points: {
                    coverage_type: 'week',
                    week: '21',
                    total: '2'
                  },
                  stats: [
                    {
                      stat_id: '1',
                      value: '14'
                    },
                    {
                      stat_id: '2',
                      value: '14'
                    },
                    {
                      stat_id: '4',
                      value: '0'
                    },
                    {
                      stat_id: '5',
                      value: '34'
                    },
                    {
                      stat_id: '8',
                      value: '6'
                    },
                    {
                      stat_id: '12',
                      value: '2'
                    },
                    {
                      stat_id: '16',
                      value: '76'
                    },
                    {
                      stat_id: '31',
                      value: '40'
                    },
                    {
                      stat_id: '32',
                      value: '25'
                    },
                    {
                      stat_id: '19',
                      value: '1'
                    },
                    {
                      stat_id: '22',
                      value: '17'
                    },
                    {
                      stat_id: '23',
                      value: '3.38'
                    },
                    {
                      stat_id: '25',
                      value: '127'
                    },
                    {
                      stat_id: '24',
                      value: '144'
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
                }
              ]
            }
          ]
        }
      }
    }
  },
  components: {
    Standings
  },
  methods: {
    getLeague: function () {
      let self = this
      Axios.post('/api/yahoo/leagues/fetch', {
        league_keys: [
          this.$route.params.game_id + '.l.' + this.$route.params.league_id
        ],
        subresources: ['settings', 'standings', 'scoreboard']
      })
        .then((response) => {
          self.league = response.data[0]
          self.updateStore()
        })
        .catch((error) => {
          self.updateStore()
          console.log(error)
        })
    },
    updateStore: function () {
      let data = {
        settings: this.league.settings,
        teams: this.league.standings.map(team => {
          return {name: team.name, team_id: team.team_id}
        }),
        league: {
          game_code: this.league.game_code,
          league_id: this.league.league_id
        }
      }
      this.$store.commit('setLeagueData', data)
    }
  },
  mounted () {
    this.getLeague()
  }
}
</script>
