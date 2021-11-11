import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCategoryTable1634884743301 implements MigrationInterface {
  name = 'createCategoryTable1634884743301';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "project" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "repo" character varying NOT NULL,
                "thumbnail" character varying NOT NULL,
                "createdAt" date NOT NULL,
                "difficulty" character varying NOT NULL,
                CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "category" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "tech" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "img" character varying NOT NULL,
                CONSTRAINT "PK_d7eeeeef666045db381daafa4d8" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "role" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "project_categories_category" (
                "projectId" integer NOT NULL,
                "categoryId" integer NOT NULL,
                CONSTRAINT "PK_284bdc821ce5aa065f75fd92ebb" PRIMARY KEY ("projectId", "categoryId")
            )
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_c69602ecc23990f6c11b1ed470" ON "project_categories_category" ("projectId")
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_9b47f8b749484ae8bcb6b2550b" ON "project_categories_category" ("categoryId")
        `);
    await queryRunner.query(`
            ALTER TABLE "project_categories_category"
            ADD CONSTRAINT "FK_c69602ecc23990f6c11b1ed4700" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE "project_categories_category"
            ADD CONSTRAINT "FK_9b47f8b749484ae8bcb6b2550b7" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "project_categories_category" DROP CONSTRAINT "FK_9b47f8b749484ae8bcb6b2550b7"
        `);
    await queryRunner.query(`
            ALTER TABLE "project_categories_category" DROP CONSTRAINT "FK_c69602ecc23990f6c11b1ed4700"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_9b47f8b749484ae8bcb6b2550b"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_c69602ecc23990f6c11b1ed470"
        `);
    await queryRunner.query(`
            DROP TABLE "project_categories_category"
        `);
    await queryRunner.query(`
            DROP TABLE "user"
        `);
    await queryRunner.query(`
            DROP TABLE "tech"
        `);
    await queryRunner.query(`
            DROP TABLE "category"
        `);
    await queryRunner.query(`
            DROP TABLE "project"
        `);
  }
}
