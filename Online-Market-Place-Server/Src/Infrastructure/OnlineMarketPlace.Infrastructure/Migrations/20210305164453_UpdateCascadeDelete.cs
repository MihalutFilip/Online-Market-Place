using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineMarketPlace.Infrastructure.Migrations
{
    public partial class UpdateCascadeDelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AttributeValues_AttributeTypes_AttributeTypeId",
                table: "AttributeValues");

            migrationBuilder.DropForeignKey(
                name: "FK_AttributeValues_Products_ProductId",
                table: "AttributeValues");

            migrationBuilder.AddForeignKey(
                name: "FK_AttributeValues_AttributeTypes_AttributeTypeId",
                table: "AttributeValues",
                column: "AttributeTypeId",
                principalTable: "AttributeTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AttributeValues_Products_ProductId",
                table: "AttributeValues",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AttributeValues_AttributeTypes_AttributeTypeId",
                table: "AttributeValues");

            migrationBuilder.DropForeignKey(
                name: "FK_AttributeValues_Products_ProductId",
                table: "AttributeValues");

            migrationBuilder.AddForeignKey(
                name: "FK_AttributeValues_AttributeTypes_AttributeTypeId",
                table: "AttributeValues",
                column: "AttributeTypeId",
                principalTable: "AttributeTypes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AttributeValues_Products_ProductId",
                table: "AttributeValues",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");
        }
    }
}
