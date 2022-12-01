import { Search, Province, Municipality } from 'eskom-loadshedding-api';

Search.getMunicipalities(Province.WESTERN_CAPE).then((municipalities) =>
    console.log(
        'Western Cape municipalities:',
        municipalities((el) => el.name)
    )
);