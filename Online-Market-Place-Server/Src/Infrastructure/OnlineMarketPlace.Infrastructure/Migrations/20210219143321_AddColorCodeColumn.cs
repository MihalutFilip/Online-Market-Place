using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineMarketPlace.Infrastructure.Migrations
{
    public partial class AddColorCodeColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ColorCode",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ColorCode",
                table: "Users");
        }
    }
}
