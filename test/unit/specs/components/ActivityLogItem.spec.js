import Vue from 'vue'
import Vuex from 'vuex'
import ActivityLogItem from '../../../../src/components/ActivityLogItem/ActivityLogItem'

describe('ActivityLogItem.vue', () => {
  it('activity user name', () => {
    const Ctor = Vue.extend(ActivityLogItem)
    const vm = new Ctor({
      props: {
        activity: {
          default: () => {
            return {
              user_name: 'テストユーザ'
            }
          }
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.activityLogItem .user-name').textContent)
      .to.equal('テストユーザ')
  })

  it('activity action type is "UPDATE_CREATIVE"', () => {
    const Ctor = Vue.extend(ActivityLogItem)
    const vm = new Ctor({
      props: {
        activity: {
          default: () => {
            return {
              action_type: 'UPDATE_CREATIVE'
            }
          }
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.activityLogItem .update-creative').textContent)
      .to.equal('画像を更新しました')
  })

  it('activity action type is "ADD_COMMENT"', () => {
    const Ctor = Vue.extend(ActivityLogItem)
    const vm = new Ctor({
      props: {
        activity: {
          default: () => {
            return {
              action_type: 'ADD_COMMENT',
              description: 'テスト'
            }
          }
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.activityLogItem .add-comment').textContent)
      .to.equal('コメントしました 「テスト」')
  })

  it('activity action type is "UPDATE_STATUS"', () => {
    const Ctor = Vue.extend(ActivityLogItem)
    const vm = new Ctor({
      props: {
        activity: {
          default: () => {
            return {
              action_type: 'UPDATE_STATUS',
              description: 'テスト'
            }
          }
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.activityLogItem .update-status').textContent)
      .to.equal('ステータスを「テスト」に変更しました')
  })

  it('activity updated at', () => {
    const Ctor = Vue.extend(ActivityLogItem)
    const vm = new Ctor({
      props: {
        activity: {
          default: () => {
            return {
              updated_at: 'YYYY/MM/DD 00:00:00'
            }
          }
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.activityLogItem .updated-at').textContent)
      .to.equal('YYYY/MM/DD 00:00:00')
  })
})
