<template>
  <img :src="url">
</template>

<script>
  import { mapState } from 'vuex';
  import uniq from 'lodash/uniq';

  export default {
    computed: mapState({
      url: state => {
        const {
          route: {
            params: {
              year,
              brand
            }
          },
          config: {
            rpos,
            selections: {
              style,
              exteriorColor,
              interiorColor
            },
            entities: {
              styles
            }
          }
        } = state;

        const normalizedOptions = uniq([interiorColor, exteriorColor].concat(rpos))
          .filter(x => x.length === 3);

        const selectedStyle = styles[style];
        const { code, codeForCGI } = selectedStyle.vehicleInfo;
        const baseUrl = `http://cgi.${brand}.com/mmgprod-us/dynres/prove/imageinterior.gen`;
        const queryString = `i=${year}/${code.split('_')[0]}/${codeForCGI}/${normalizedOptions.join('_')}gmds2.jpg&v=deg01&std=true&country=US&removeCat=`

        return `${baseUrl}?${queryString}`
      }
    })
  }
</script>

<style scoped>

</style>
