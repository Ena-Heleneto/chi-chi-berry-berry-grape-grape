export const useMyRoute = createGlobalState(() => {
  const active = useStorage('active', 'a', uniStorage)

  const tarbar = ref<{ name: string, path: string, icon: string }[]>([
    { name: 'Home', path: '/home', icon: '' },
    { name: 'Edit', path: '/edit', icon: '' },
    { name: 'Batch', path: '/batch', icon: '' },
    { name: 'Cloud', path: '/cloud', icon: '' },
    { name: 'Share', path: '/share', icon: '' },
  ])

  return { active, tarbar }
})
