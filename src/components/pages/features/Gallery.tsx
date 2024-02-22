import Showcase from './Showcase'

import Screenshot1 from '@/images/screenshots/website-1-home.webp'
import Screenshot2 from '@/images/screenshots/website-2-nodes.webp'
import Screenshot3 from '@/images/screenshots/website-3-shards.webp'
import Screenshot4 from '@/images/screenshots/website-4-indices.webp'
import Screenshot5 from '@/images/screenshots/website-5-index-aliases.webp'
import Screenshot6 from '@/images/screenshots/website-6-search.webp'
import Screenshot7 from '@/images/screenshots/website-7-document.webp'
import Screenshot8 from '@/images/screenshots/website-8-rest.webp'
import Screenshot9 from '@/images/screenshots/website-9-settings.webp'

export default function Gallery() {
  return (
    <>
      <div className="gallery-wrapper">
        <Showcase
          title="Cluster overview"
          image={{ src: Screenshot1, priority: true }}
        >
          <p>
            Elasticvue shows a summary of your clusters data. This includes the
            amount of nodes, shards, indices and the health of your whole
            cluster.
          </p>
        </Showcase>

        <Showcase title="Cluster nodes" image={{ src: Screenshot2 }} reverse>
          <p className="mb-2">
            You can view a list of every node in your cluster.
          </p>
          <p>
            The table shows the most important details about each node,
            including performance metrics like cpu and heap.
          </p>
        </Showcase>

        <Showcase title="Cluster shards" image={{ src: Screenshot3 }}>
          <p>
            You can view your current shard allocations and also relocate shards
            to different nodes.
          </p>
        </Showcase>

        <Showcase title="Index management" image={{ src: Screenshot4 }} reverse>
          <p>
            You can manually create and manage your indices. This includes
            viewing index settings and stats or opening and closing the index.
          </p>
        </Showcase>

        <Showcase title="Index alias management" image={{ src: Screenshot5 }}>
          <p>
            Elasticvue provides a frontend for you to quickly add & remove
            aliases for you indices.
          </p>
        </Showcase>

        <Showcase title="Document search" image={{ src: Screenshot6 }} reverse>
          <p className="mb-2">
            You can search documents and view the results in a fully featured
            table, including sorting, filtering and pagination.
          </p>
          <p>
            You can also adjust the generated query when you need additional
            control.
          </p>
        </Showcase>

        <Showcase title="Edit documents" image={{ src: Screenshot7 }}>
          <p>You can directly view and edit every document in your cluster.</p>
        </Showcase>

        <Showcase title="REST gui" image={{ src: Screenshot8 }} reverse>
          <p>
            Elasticvue has a gui to query your cluster via direct HTTP requests.
            You can also view and re-use your query history.
          </p>
        </Showcase>

        <Showcase title="Settings" image={{ src: Screenshot9 }}>
          <p className="mb-2">
            You can configure a custom regex to hide indices or node attributes
            that you don&apos;t usually need.
          </p>
          <p>
            You can also import & export your elasticvue data if you frequently
            switch devices or browsers.
          </p>
        </Showcase>
      </div>
    </>
  )
}
