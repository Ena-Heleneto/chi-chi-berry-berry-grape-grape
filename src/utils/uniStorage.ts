export const uniStorage = {
  /**
   * 从 UniApp 的同步存储中获取指定 key 对应的值。
   *
   * @param key - 要获取值的键名。
   * @returns 如果存在则返回存储的值，否则返回 `null`。
   */
  getItem(key: string) {
    return uni.getStorageSync(key) || null
  },

  /**
   * 将指定的值以同步方式存储到本地存储中。
   *
   * @param key - 要存储数据的键名。
   * @param value - 要存储的值，可以是任意类型。
   * @returns `uni.setStorageSync` 操作的结果。
   */
  setItem(key: string, value: any) {
    return uni.setStorageSync(key, value)
  },

  /**
   * 从本地存储中同步移除指定 key 的数据。
   *
   * @param key - 要移除的数据的键名。
   * @returns `uni.removeStorageSync` 操作的结果。
   */
  removeItem(key: string) {
    return uni.removeStorageSync(key)
  },
}
