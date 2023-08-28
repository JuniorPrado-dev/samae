import knex from "knex";

const connection = knex({
    client: 'mysql',
    connection: {
      host : '89.117.7.204',
      port : 3306,
      user : 'u885264202_ronaldy',
      password : 'Ciro.010203',
      database : 'u885264202_ciroboybr'
    }
  });

export default connection