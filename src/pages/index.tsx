import DefaultLayout from '@components/Layouts/Default/default'
import WebTV from '@components/WebTV/web-tv'

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <WebTV />
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
