 <b:loop values='data:post.labels' var='label'>
            <script expr:src='&quot;/feeds/posts/summary/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=bacaJuga&amp;max-results=5&quot;'/>
        </b:loop>