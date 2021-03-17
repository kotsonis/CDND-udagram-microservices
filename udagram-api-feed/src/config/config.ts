export const config = {
  "dev": {
    
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.AWS_HOST, // "udagramkotsonisdev.cwapiu3ap1sp.eu-central-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION, //"eu-central-1",
    "aws_profile": process.env.AWS_PROFILE, //"default",
    "aws_media_bucket": process.env.AWS_S3_BUCKET,
    'url': 'http:\\localhost'
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
