using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineMarketPlace.Infrastructure.Migrations
{
    public partial class AddImageBase64Column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "ImageBase64",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageBase64",
                table: "Products");
        }
    }
}
