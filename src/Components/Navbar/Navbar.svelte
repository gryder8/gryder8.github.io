<!--src/Components/Navbar/Navbar.svelte-->

<script>
    export let navlists = [];
    export let header;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar">
    <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
        <a class="dark-name" href="/">
            {header}
        </a>
        <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                {#each navlists as list}
                    <li class="nav-item">
                        <a class="nav-link light-color" href={list.url}>{list.label}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
    #nav-bar {
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .navbar {
        padding: 0 20px !important;
    }

    .navbar-nav li {
        padding: 0 0 0 20px;
    }

    .navbar-nav li a {
        font-weight: 600;
        font-family: -apple-system-headline,system-ui;
        text-transform: uppercase;
        float: right;
        text-align: left;
    }
</style>