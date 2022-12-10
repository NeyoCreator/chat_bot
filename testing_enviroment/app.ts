import { Search, SearchSuburb } from 'eskom-loadshedding-api';

Search.searchSuburbs('Ashton').then((results: SearchSuburb[]) => console.log('Searching for "Ashton":', results));